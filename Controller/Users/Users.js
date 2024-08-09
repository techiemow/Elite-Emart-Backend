const { UserModel } = require("../../Model/UserSignupmodel");
const Users = async (req, res) => {
    try {
     

        const allUsers = await UserModel.find();

        res.json({
            message: "All Users",
            data: allUsers,
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = 
{
    Users
}