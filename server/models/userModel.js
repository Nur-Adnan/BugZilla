const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, unique: false, sparse: true }, // Add sparse if you want to index null values but not enforce uniqueness on them
  role: {
    type: String,
    enum: ["NormalUser", "Admin"],
    default: "NormalUser",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
