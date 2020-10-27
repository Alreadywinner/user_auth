module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    return res.status(200).json("successful");
  }