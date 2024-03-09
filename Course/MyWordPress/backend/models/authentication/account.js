const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
    role: [],
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", accountSchema);

exports.Account = Account;
