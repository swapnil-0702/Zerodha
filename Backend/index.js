require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);

app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({}).sort({ _id: -1 });
    res.json(allOrders);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    console.log(req.body);

    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    if (mode === "BUY") {
      const holding = await HoldingsModel.findOne({ name });

      if (holding) {
        const totalQty = holding.qty + qty;

        const newAvg = (holding.qty * holding.avg + qty * price) / totalQty;

        holding.qty = totalQty;
        holding.avg = newAvg;
        holding.price = price;

        await holding.save();
      } else {
        const newHolding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });

        await newHolding.save();
      }
    }

    if (mode === "SELL") {
      const holding = await HoldingsModel.findOne({ name });

      if (!holding) {
        return res.status(400).send("You don't own this stock");
      }

      if (holding.qty < qty) {
        return res.status(400).send("Not enough quantity to sell");
      }

      holding.qty = holding.qty - qty;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    res.send("Order saved and holding updated!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { firstName, username, identifier, password } = req.body;

    let email;
    let mobile;

    if (identifier.includes("@")) {
      email = identifier;
    } else {
      mobile = identifier;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      firstName,
      username,
      email,
      mobile,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.setHeader(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Lax`,
    );

    res.status(201).json({
      message: "Signup successful!",
      token,
      user: {
        id: newUser._id,
        firstName: newUser.firstName || newUser.username,
        username: newUser.username,
        email: newUser.email,
        mobile: newUser.mobile,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({
      username,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.setHeader(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Lax`,
    );

    res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        firstName: user.firstName || user.username,
        username: user.username,
        email: user.email,
        mobile: user.mobile,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.get("/me", async (req, res) => {
  try {
    const cookieHeader = req.headers.cookie;

    if (!cookieHeader) {
      return res.status(401).json({
        message: "Not logged in",
      });
    }

    const token = cookieHeader
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      return res.status(401).json({
        message: "Not logged in",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    res.json({
      id: user._id,
      firstName: user.firstName || user.username,
      username: user.username,
      email: user.email,
      mobile: user.mobile,
    });
  } catch (error) {
    console.log(error);

    res.status(401).json({
      message: "Invalid or expired token",
    });
  }
});

app.get("/stocks", async (req, res) => {
  try {
    const symbols = req.query.symbols?.split(",") || [];

    if (symbols.length === 0) {
      return res.json([]);
    }

    const response = await fetch(
      `http://127.0.0.1:8787/stock/list?symbols=${symbols.join(",")}&res=num`
    );

    if (!response.ok) {
      throw new Error(`Stock API returned ${response.status}`);
    }

    const data = await response.json();

    const results = data.stocks.map((stock) => ({
      name: stock.symbol,
      price: stock.last_price,
      change: `${stock.percent_change}%`,
    }));

    res.json(results);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch stock data",
    });
  }
});

app.listen(PORT, async () => {
  console.log(`app started on port ${PORT}`);

  try {
    await mongoose.connect(URL);
    console.log("DB Connected");
  } catch (err) {
    console.log("DB Connection Failed");
    console.log(err.message);
  }
});
