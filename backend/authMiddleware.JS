import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
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

export default authMiddleware;
