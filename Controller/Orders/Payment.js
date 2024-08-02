const OrderModel = require("../../Model/OrderModel");
const { UserModel } = require("../../Model/UserSignupmodel");
const razorpay = require("../../Razorpay")

const payment = async(req,res) =>{
  try {
    const { cartItems, amount, currency ,email } = req.body;
    const userId = req.userId;

    const user = await UserModel.findOne({ _id: userId });
    console.log(cartItems);

    const options = {
        amount: amount * 100, // Amount in paise
        currency: currency,
        receipt: `receipt_${Date.now()}`, // Unique receipt ID
        payment_capture: '1'
    };

    const order = await razorpay.orders.create(options);

    const newOrder = new OrderModel({
        userId,
        email,
        productDetails: cartItems.map(item => ({
            productId: item.productId._id,
            productName: item.productId.productName,
            productPrice: item.productId.sellingPrice,
            quantity: item.quantity,
           
        })),
        paymentDetails: {
            razorpayOrderId: order.id,
            orderCreationId: order.receipt
        },
        totalAmount: amount
    });
    
    const response =  await newOrder.save();

    console.log(response);
    res.json({
        order_id: order.id,
        amount: order.amount,
    });
} catch (err) {
    console.error('Error creating Razorpay order:', err);
    res.status(400).json({
        message: err.message || err,
        error: true,
        success: false
    });
}
}

module.exports = payment