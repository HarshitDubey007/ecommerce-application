const jwt = require('jsonwebtoken')

exports.requireSignin = (req, res, next) => {
  // console.log(req.headers, " aaaaaaaaa")
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    console.log(user)
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }
  next();
  //jwt.decode()
};


exports.userMiddleware = (req, res, next) => {
  console.log(req.user.role)
  if (req.user.role !== "user") {
    return res.status(400).json({ message: 'User access denied' })
  }
  next();
}

exports.adminMiddleware = (req, res, next) => {

  console.log(req.user.role)
  if (req.user.role !== "admin") {
    return res.status(400).json({ message: 'Admin Access denied' })
  }
  next();
}