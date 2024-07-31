const { UserModel } = require("../Model/UserSignupmodel")

const UploadPermission = async(userId) =>{

    const user = await UserModel.findById(userId)
    
        if(user.role !== 'Admin'){
            return false
        }
        return true
       
    
}

module.exports = UploadPermission