const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.REACT_APP_JWT_SECRET, {
           expiresIn: '1d'
    })
}

module.exports = generateToken;