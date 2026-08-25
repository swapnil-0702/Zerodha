const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    pnl: Number,
    day : String, 
    isLose : Boolean
});

module.exports = { PositionsSchema };
