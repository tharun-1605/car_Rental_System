const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // req.headers={
  //     "Authorization": "Bearer " +"123456"
  // }
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided" });
  }
  try {
    const decoded = jwt.verify(token, "hello");
    req.user = decoded;
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
  next();
};

module.exports =authMiddleware;