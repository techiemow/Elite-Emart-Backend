const express = require("express")


const Router = express.Router()

const Signup = require("../Controller/SignUp")
const Login = require("../Controller/Login")
 

Router.post("/Signup",Signup)
Router.get("/Login/:username/:password", Login);

module.exports ={

    Router
}