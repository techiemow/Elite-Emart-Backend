const ProductModel = require("../../Model/productModel");

const ViaCategory = async(req,res) =>{
try{
    const category = req.query.category 
    const products = await ProductModel.find({category})

    res.json({
        data: products,
        success:true,
        error:false
    })
 }catch (err) {
    res.status(400).json({
        message: err.message || err,
        error: true,
        success: false
    });
}
}
module.exports = ViaCategory