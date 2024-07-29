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
            const token = jwt.sign({ data: username }, "userkey", { expiresIn: '1h' });
            res.cookie("token", token).status(201).json({
                success: true,
                username: user.username,
                token: token,
                message: "Login successfully"
            });
        } else {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Login failed" });
    }
};

module.exports = Login;
