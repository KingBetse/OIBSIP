const express = require("express");

const viewController = require("../Controller/viewController");
const authorController = require("../Controller/userController");
const Router = express.Router();

Router.get("/login", viewController.logIn);
Router.get("/signup", viewController.signUp);
Router.get("/", viewController.home);

module.exports = Router;
