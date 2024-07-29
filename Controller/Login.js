const { UserModel } = require("../Model/UserSignupmodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
    try {
        const { username, password } = req.params;

        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(user);
        if (passwordMatch) {
            const tokenData = {
                _id : user._id,
                email : user.emailaddress,
            }

            console.log(tokenData);
            const token = await jwt.sign(tokenData,"userkey", { expiresIn: 60 * 60 * 8 });

            res.cookie("token",token).status(200).json({
                message : "Login successfully",
                data : token,
                success : true,
                error : false
            })
      

        }else{
            throw new Error("Please check Password")
          }
          
    } catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
};

module.exports = Login;
