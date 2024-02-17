const mongoose = require("mongoose")

const roleSchema = new mongoose.Schema({
  name: {type: String, require: true},
  permissions: []
}, {timestamps: true});

const Role = mongoose.model("Role", roleSchema);

exports.Role = Role;