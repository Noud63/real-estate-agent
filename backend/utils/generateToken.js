const jwt = require('jsonwebtoken')

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.REACT_APP_JWT_SECRET, {
           expiresIn: '30d'
    })
    console.log(token)
    return token
}

module.exports = generateToken;