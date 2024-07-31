<<<<<<< HEAD
const { UserModel } = require("../Model/UserSignupmodel")


const UserDetails = async(req,res)=>{
    try{
        console.log("userId",req.userId)
        const user = await UserModel.findById(req.userId)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })

        console.log("user",user)

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = UserDetails
=======
const { UserModel } = require("../Model/UserSignupmodel");

const UserDetails = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            });
        }
        console.log(user);

        res.status(200).json({
            data: user,
            error: false,
            success: true,
            message: "User details"
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = UserDetails;
>>>>>>> 91b97320eecaa9a86b289bb3adb0111199533c71
