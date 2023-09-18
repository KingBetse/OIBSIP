const express = require("express");
const userController = require("../Controller/userController");
const userSchema = require("../Schema/userSchema");
const router = express.Router();
router.post("/api/v1/test/signup", userController.signUp);
router.post("/api/v1/test/login", userController.logIn);

module.exports = router;
// validate(userSchema), userController.signUp
