const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    productDetails: [
        {
            productId: String,
            productName: String,
            productPrice: Number,
            quantity: Number,
        
        }
    ],
    paymentDetails: {
        razorpayPaymentId: String,
        razorpayOrderId: String,
        razorpaySignature: String,
        orderCreationId: String,
        status:String

    },
    totalAmount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const OrderModel = mongoose.model('Orders', OrderSchema);

module.exports = OrderModel;
