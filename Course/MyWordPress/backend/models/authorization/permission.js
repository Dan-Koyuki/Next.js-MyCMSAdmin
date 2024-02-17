const mongoose = require("mongoose")

const permissionSchema = new mongoose.Schema({
  name: {type: String, require: true},
}, {timestamps: true});

const Permission = mongoose.model("Permission", permissionSchema);

exports.Permission = Permission;