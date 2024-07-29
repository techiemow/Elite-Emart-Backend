const { UserModel } = require("../Model/UserSignupmodel")


const UserDetails = async(req, res) => {
    try{
       
        const user = await UserModel.findOne(req.data)
        console.log(user)
        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })

        console.log("user", user.username)

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = UserDetails