const UploadPermission = require("../../Helpers/Permission")
const ProductModel = require("../../Model/productModel")

const EditUploadedProducts = async(req ,res) =>{
    try{
        if(!UploadPermission(req.userId)){
            throw new Error("Permission denied")
        }
         
       
        const { _id, ...resBody} = req.body.data
       
        
        const updateProduct = await ProductModel.findByIdAndUpdate(_id,resBody)
      
        res.json({
            message : "Product update successfully",
            data : updateProduct,
            success : true,
            error : false
        })
    }catch (err) {
       res.status(400).json({
           message: err.message || err,
           error: true,
           success: false
       });
   }

}

module.exports = EditUploadedProducts