const UploadPermission = require("../Helpers/Permission");
const ProductModel = require("../Model/productModel");

const UploadProductController = async(req,res) =>{

     try{
         const sessionId = req.userId

         if(!UploadPermission(sessionId)){
        throw new Error ("Permission denied")
         }
        
         console.log(req.body.data);
        const uploadProduct = new ProductModel(req.body.data)
        const saveProduct = await uploadProduct.save()
        res.status(201).json({
            message : "Product upload successfully",
            error : false,
            success : true,
            data : saveProduct
        })
     }catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }

 
}







module.exports = UploadProductController;

