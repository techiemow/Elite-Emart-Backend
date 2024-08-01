const ProductModel = require("../../Model/productModel");

const productDetails = async(req,res) => {
    try{
        const { id  } = req.params;
        console.log(req.params);

        const product =  await ProductModel.findById(id);
        
        console.log(product);
        res.json({
            data:product,
            message:"product details are found",
            success: true ,
            error: false
        })
        



    }catch (err) {
    res.status(400).json({
        message: err.message || err,
        error: true,
        success: false
    });
}
}
module.exports = productDetails