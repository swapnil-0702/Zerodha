const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    unique: true,
    sparse: true,
  },

  mobile: {
    type: String,
    unique: true,
    sparse: true,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = {
  UserSchema,
};
