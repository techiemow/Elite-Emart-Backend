const jwt = require("jsonwebtoken");
const { UserModel } = require("../Model/UserSignupmodel");

const verifyUser = async (username) => {
    const user = await UserModel.findOne({ username });
    return !!user;
};

const AuthToken = async (req, res, next) => {
    try {
        if (req.path === "/Signup" || req.path.startsWith("/Login")) {
            return next();
        }

        const token = req.headers.auth;
        console.log(token);
        if (!token) {
            return res.status(400).send('Token missing');
        }

        const tokenDecoded = jwt.verify(token, "userkey");
        const username = tokenDecoded.data;

        const userExists = await verifyUser(username);
        if (userExists) {
            next();
        } else {
            res.status(400).send('User verification failed');
        }
    } catch (err) {
        res.status(401).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = AuthToken;
