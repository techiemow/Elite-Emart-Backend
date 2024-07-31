const express = require("express");
const Router = express.Router();

const Signup = require("../Controller/SignUp");
const Login = require("../Controller/Login");
const authToken = require("../Middleware/Auth");
const UserDetails = require("../Controller/UserDetails");
const { Users } = require("../Controller/Users");
const UpdateUser = require("../Controller/UpdateUser");
const UploadProductController = require("../Controller/UploadProductController");



Router.post("/Signup", Signup);
Router.get("/Login/:username/:password", Login);
Router.get("/UserDetails",authToken, UserDetails)

Router.get("/Users", authToken, Users )
Router.put("/UpdateUser" ,authToken, UpdateUser)


Router.post("/UploadProduct",authToken,UploadProductController); 

module.exports = { Router };