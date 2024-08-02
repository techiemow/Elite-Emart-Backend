const { UserModel } = require("../../Model/UserSignupmodel");
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