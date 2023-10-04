const User = require("../models/UserModel");

const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const token = req.cookies["token"];
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Error: Please login to use this resource",
      });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData || !decodedData.id) {
      return res.status(401).json({
        success: false,
        message: "Invalid token or missing user ID in token",
      });
    }

    req.user = await User.findById(decodedData.id);
    next();
  } catch (error) {
    next(error);
  }
};
