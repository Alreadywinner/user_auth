const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
  console.log(err.message, err.code);

  // validation errors
  if (err.message.includes('users validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}


const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'my name is arham', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        const errors = handleErrors(err);
        return res.status(400).json({ errors })
      } else {
        console.log(decodedToken);
        return res.status(200).json('/stripe');
      }
    });
  } else {
    return res.status(400).json("/login")
  }
};

module.exports = { requireAuth };