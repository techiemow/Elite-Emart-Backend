const ProductModel = require("../../Model/productModel");

const Products = async(req ,res) =>{
    try{
       
       const Allproducts = await ProductModel.find().sort({ createdAt: -1 });

       res.json({
        data:Allproducts,
        message:"all products uploaded are found",
        success: true ,
        error: false
       })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }


}


module.exports = Products;
