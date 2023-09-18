const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: [true, "User must have Email"],
    unique: [true, "user must not have the same email"],
    lowercase: true,
    validate: [validator.isEmail, "please provide a valid email"],
  },
  password: {
    type: String,
    require: [true, "User must have password"],
    minLength: 4,
  },
});
const User = mongoose.model("User", userSchema);
//username:kingbetse
//4YWQgTzleNuqwcoY
//password:4YWQgTzleNuqwcoY
module.exports = User;
