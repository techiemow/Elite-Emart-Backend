const express = require("express");
const Router = express.Router();

const Signup = require("../Controller/SignUp");
const Login = require("../Controller/Login");
const UserDetails = require("../Controller/UserDetails");

Router.post("/Signup", Signup);
Router.get("/Login/:username/:password", Login);
Router.get("/UserDetails", UserDetails)

module.exports = { Router };
