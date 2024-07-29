const express = require("express");
const Router = express.Router();

const Signup = require("../Controller/SignUp");
const Login = require("../Controller/Login");
const authToken = require("../Middleware/Auth");
const UserDetails = require("../Controller/UserDetails");

Router.post("/Signup", Signup);
Router.get("/Login/:username/:password", Login);
Router.get("/UserDetails",authToken, UserDetails)

module.exports = { Router };
