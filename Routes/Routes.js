const express = require("express");
const Router = express.Router();

const Signup = require("../Controller/SignUp");
const Login = require("../Controller/Login");
<<<<<<< HEAD
const UserDetails = require("../Controller/UserDetails");

Router.post("/Signup", Signup);
Router.get("/Login/:username/:password", Login);
Router.get("/UserDetails", UserDetails)
=======
const authToken = require("../Middleware/Auth");
const UserDetails = require("../Controller/UserDetails");
const { Users } = require("../Controller/Users");
const UpdateUser = require("../Controller/UpdateUser");


Router.post("/Signup", Signup);
Router.get("/Login/:username/:password", Login);
Router.get("/UserDetails",authToken, UserDetails)

Router.get("/Users", authToken, Users )
Router.put("/UpdateUser" ,authToken, UpdateUser)


>>>>>>> 91b97320eecaa9a86b289bb3adb0111199533c71

module.exports = { Router };
