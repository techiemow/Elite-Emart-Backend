const mongoose = require('mongoose')

const Schema = mongoose.Schema


const CartSchema = new Schema({
    productId :{
        ref : "products",
        type : String,
        required : true
    },
    quantity:{
        type : Number,
        required : true

    },
    userId:{
        type : String,
        required : true

    }

},{
    timestamps : true
})


const CartModel = mongoose.model("Carts" ,CartSchema)


module.exports = CartModel;
