const OrderModel = require("../../Model/OrderModel");
const crypto = require('crypto')

const Success = async(req,res) =>{
    try {
        const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
        const userId = req.userId;

        const shasum = crypto.createHmac('sha256', "ozspmFKoIn4xtZLmJsmXEVoR");
        shasum.update(`${razorpayOrderId}|${razorpayPaymentId}`);
        const digest = shasum.digest('hex');

        if (digest === razorpaySignature) {
            const order = await OrderModel.findOne({ 'paymentDetails.razorpayOrderId': razorpayOrderId });

            if (!order) {
                return res.status(400).json({ message: 'Order not found', success: false });
            }

            order.paymentDetails.razorpayPaymentId = razorpayPaymentId;
            order.paymentDetails.razorpaySignature = razorpaySignature;
            order.paymentDetails.status = 'success';

           const response = await order.save();
           console.log(response);

            res.json({ message: 'Payment verified successfully', success: true });
        } else {
            res.status(400).json({ message: 'Invalid signature', success: false });
        }
    } catch (err) {
        console.error('Error verifying payment:', err);
        res.status(500).send('Server error');
    }




}


module.exports = Success;