// Initiate the middleware to verify the token and authenticate the user
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  //const token = req.header("x-auth-token");

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "No token, authorization denied", status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    console.log("Decoded user:", req.user); // Logging the decoded user
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid", status: 401 });
  }
};

export default auth;
