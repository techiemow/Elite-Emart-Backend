const CartModel = require("../../Model/ShoppingCartModel");

;

const DeleteProducts = async(req,res) =>{
     try{
        User = req.userId

        const {id} = req.params;

        const response = await CartModel.deleteOne({productId:id});

        res.json({
            message: "Product deleted successfully",
            success: true,
            data: response
        })
        

     }catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports= DeleteProducts