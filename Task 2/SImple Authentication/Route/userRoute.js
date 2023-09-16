const express = require("express");
const userController = require("../Controller/userController");
const validate = require("../middle ware/validate");
const userSchema = require("../Schema/userSchema");
const router = express.Router();
router.post("/api/v1/test/signup", validate(userSchema), userController.signUp);
router.get("", validate(userSchema), userController.logIn);

module.exports = router;
// validate(userSchema), userController.signUp
