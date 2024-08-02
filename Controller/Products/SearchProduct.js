const ProductModel = require("../../Model/productModel");

const searchproduct = async(req,res) =>{

    try{
        const query = req.query.product
        if (!query) {
            return res.status(400).json({
                message: 'Product query is required',
                error: true,
                success: false
            });
        }
        const regex = new RegExp(query,'i','g')

        const response = await ProductModel.find({
            "$or" : [
                {
                    productName : regex
                },
                {
                    category : regex
                }
            ]
        })

        console.log(response);
        

        res.json({
            message: 'Search products',
            success: true,
            error: false,
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

module.exports = searchproduct;