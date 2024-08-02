const { UserModel } = require("../../Model/UserSignupmodel");
const UpdateUser = async(req,res) =>{
try{
    const sessionUser = req.userId

    const { userId , emailaddress, username, role} = req.body

    const payload = {
        ...( emailaddress && { emailaddress : emailaddress}),
        ...( username && { username : username}),
        ...( role && { role : role}),
    }

    const user = await UserModel.findById(sessionUser)

    console.log("user.role",user.role)
    const updateUser = await UserModel.findByIdAndUpdate(userId,payload)

        
    res.json({
        data : updateUser,
        message : "User Updated",
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

module.exports = UpdateUser