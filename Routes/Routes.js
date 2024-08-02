const express = require("express");
const Router = express.Router();


const Login = require("../Controller/Users/Login");
const authToken = require("../Middleware/Auth");

const UploadProductController = require("../Controller/Products/UploadProductController");
const Products = require("../Controller/Products/AddedProducts");
const EditUploadedProducts = require("../Controller/Products/EditUploadProducts");
const getCategoryProduct = require("../Controller/Products/OneProductPerCategory");
const ViaCategory = require("../Controller/Products/ProductsViaCategory");
const productDetails = require("../Controller/Products/ProductDetails");
const ShoppingCart = require("../Controller/Cart/ShoppingCart");

const searchproduct = require("../Controller/Products/SearchProduct");
const filter = require("../Controller/Products/Filter");
const payment = require("../Controller/Orders/Payment");
const SignUp = require("../Controller/Users/SignUp");
const UserDetails = require("../Controller/Users/UserDetails");
const  {Users}= require("../Controller/Users/Users");
const UpdateUser = require("../Controller/Users/UpdateUser");
const CartUpdate = require("../Controller/Cart/CartUpdation");
const CountCartPerUser = require("../Controller/Cart/CountCartPerUser");
const ViewCart = require("../Controller/Cart/ViewCart");
const DeleteProducts = require("../Controller/Cart/DeleteCartProducts");
const Success = require("../Controller/Orders/Orders");
const ViewOrder = require("../Controller/Orders/ViewOrderPage");

Router.post("/Signup", SignUp);
Router.get("/Login/:username/:password", Login);
Router.get("/UserDetails",authToken, UserDetails)
Router.get("/Users", authToken, Users )
Router.put("/UpdateUser" ,authToken, UpdateUser)


Router.post("/UploadProduct",authToken,UploadProductController); 
Router.get( "/GetProducts",Products);
Router.put("/EditProducts",authToken,EditUploadedProducts)
Router.get("/Categorylist",getCategoryProduct)
Router.get("/ProductsViaCategory",ViaCategory )
Router.get("/ProductDetails/:id",productDetails)
Router.get("/SearchProduct",searchproduct)
Router.post("/Category",filter)


// ENDPoints for Cart Datas
Router.post("/AdditionToCart/:id",authToken,ShoppingCart)
Router.get("/CountCartPerUser",authToken, CountCartPerUser)
Router.get("/ViewCart",authToken, ViewCart)
Router.put("/UpdateCart",authToken, CartUpdate)
Router.delete("/DeleteCartItem/:id",authToken,DeleteProducts )

// Endpoints for Payment and Orders
Router.post("/checkout", authToken, payment)
Router.post("/payment/success",authToken, Success)
Router.get( "/ViewOrder", authToken, ViewOrder)



module.exports = { Router };