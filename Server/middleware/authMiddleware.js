import jwt from "jsonwebtoken";

const authMiddleware = (
  req,
  res,
  next
) => {
  try {

    console.log(
      "Middleware Running..."
    );

    const token =
      req.headers.authorization;

    console.log("TOKEN:", token);

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log(
      "DECODED:",
      decoded
    );

    req.user = decoded;

    next();

  } catch (error) {

    console.log(error);

    res.status(401).json({
      message: "Invalid token",
    });

  }
};

export default authMiddleware;