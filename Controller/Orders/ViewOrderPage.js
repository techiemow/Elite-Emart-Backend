const OrderModel = require("../../Model/OrderModel");

const ViewOrder = async(req,res) =>{
   try{
      const currentuser = req.userId;

      const orders = await OrderModel.find({ userId: currentuser });
      
     
      if(!orders) return res.status(404).json({ message: 'No orders found' });
      
      res.json({ 
        success: true, 
        data: orders,
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

module.exports = ViewOrder