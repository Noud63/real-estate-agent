const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers
    if (authHeader) {
        const token = authHeader.authorization.split(' ')[1];
        jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, user) => {
            if (err) res.status(403).json("Token is not valid");
            req.user = user;
            next();
        });
    } else {
        return res.status(402).json("You are not authorized");
    }
}

const isAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
}

module.exports = { verifyToken, isAdmin }