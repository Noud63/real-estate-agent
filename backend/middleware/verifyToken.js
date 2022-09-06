const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) =>  {
    const authHeader = req.headers['Authorization']
   console.log(authHeader)
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, user) => {
            if (err) res.status(403).json("Token is not valid");
            req.user = user;
            next();
        });
    } else {
        return res.status(402).json("You are not authorized");
    }
}

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        console.log(req.user)
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
}

module.exports = {verifyToken, admin}