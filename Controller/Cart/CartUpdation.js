const CartModel = require("../../Model/ShoppingCartModel");

;

const CartUpdate = async(req,res) =>{
    try{

        const  User = req.userId

        const { productId , quantity} = req.body ;

       

        
        

        const response = await CartModel.findOneAndUpdate({ productId: productId._id}, {quantity: quantity});

            
        console.log(response);
        res.json({
            message: "Cart item updated successfully",
            data: response,
            success: true,
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

module.exports = CartUpdate;