const { UserModel } = require("../../Model/UserSignupmodel");
const razorpay = require("../../Razorpay")

const payment = async(req,res) =>{
  try {
    const { cartItems, amount, currency } = req.body;
    const userId = req.userId;

    const user = await UserModel.findOne({ _id: userId });
    console.log(user);

    const options = {
        amount: amount * 100, // Amount in paise
        currency: currency,
        receipt: `receipt_${Date.now()}`, // Unique receipt ID
        payment_capture: '1'
    };

    const order = await razorpay.orders.create(options);
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