const jwt = require("jsonwebtoken");

const verify = (req, res, next) =>  {
    const authHeader = req.headers.token;
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

module.exports = verify;