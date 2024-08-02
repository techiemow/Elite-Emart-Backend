const CartModel = require("../Model/ShoppingCartModel");

const ViewCart = async(req,res) =>{
try{
    const currentUser = req.userId;

    const allproducts = await CartModel.find({userId:currentUser}).populate("productId")
   
    // console.log(allproducts);
    res.json({
        data: allproducts,
        success: true,
        error: false
    });

}catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = ViewCart