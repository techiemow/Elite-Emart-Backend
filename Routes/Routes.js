const express = require("express");
const Router = express.Router();

const Signup = require("../Controller/SignUp");
const Login = require("../Controller/Login");
const authToken = require("../Middleware/Auth");
const UserDetails = require("../Controller/UserDetails");
const { Users } = require("../Controller/Users");
const UpdateUser = require("../Controller/UpdateUser");
const UploadProductController = require("../Controller/Products/UploadProductController");
const Products = require("../Controller/Products/AddedProducts");
const EditUploadedProducts = require("../Controller/Products/EditUploadProducts");
const getCategoryProduct = require("../Controller/Products/OneProductPerCategory");
const ViaCategory = require("../Controller/Products/ProductsViaCategory");
const productDetails = require("../Controller/Products/ProductDetails");
const ShoppingCart = require("../Controller/ShoppingCart");
const CountCartPerUser = require("../Controller/CountCartPerUser");
const ViewCart = require("../Controller/ViewCart");
const CartUpdate = require("../Controller/CartUpdation");
const DeleteProducts = require("../Controller/DeleteCartProducts");
const searchproduct = require("../Controller/Products/SearchProduct");
const filter = require("../Controller/Products/Filter");




Router.post("/Signup", Signup);
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


// ENDPoints for Cart Datas
Router.post("/AdditionToCart/:id",authToken,ShoppingCart)
Router.get("/CountCartPerUser",authToken, CountCartPerUser)
Router.get("/ViewCart",authToken, ViewCart)
Router.put("/UpdateCart",authToken, CartUpdate)
Router.delete("/DeleteCartItem/:id",authToken,DeleteProducts )




module.exports = { Router };