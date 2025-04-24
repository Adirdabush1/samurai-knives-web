const validator = require('validator')

const checkEmail = (email) => {
  return validator.isEmail(email)
}

module.exports = checkEmail
