const CartModel = require("../Model/ShoppingCartModel");

const ShoppingCart = async (req, res) => {
    try {
        const { id: productId } = req.params;
        const userId = req.userId;
           
        console.log(productId,userId);
        
        const existingProduct = await CartModel.findOne({ productId, userId });

        console.log(existingProduct);

        if (existingProduct) {
            return res.json({
                message : "Already exits in Add to cart",
                success : false,
                error : true
            })
        }

        const newCartItem = new CartModel({
            userId,
            productId,
            quantity: 1
        });

        const savedCartItem = await newCartItem.save();

        res.json({
            message: "Product added to cart successfully",
            data: savedCartItem,
            error: false,
            success: true
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || "An error occurred while adding the product to the cart.",
            error: true,
            success: false
        });
    }
}

module.exports = ShoppingCart;
