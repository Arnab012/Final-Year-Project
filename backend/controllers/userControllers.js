const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.registeruser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      image: req.file.filename,
      type: req.file.type,
    });

    res.status(201).json({
      success: true,
      message: "User Has been Created",
      user,
    });
  } catch (error) {
    // Mongoose Duplicate Error
    if (error.code === 11000) {
      const message = `Duplicate ${Object.keys(error.keyValue)} Entered`;
      return res.status(400).json({
        success: false,
        message,
      });
    }
    // JSON Web Token Error
    if (error.name === "JsonWebTokenError") {
      const message = `Invalid Json Web Token, Try Again With the Correct One`;
      res.status(400).json({
        success: false,
        message,
      });
    }
    // JSON Web Token Expire Error
    if (error.name === "TokenExpiredError") {
      const message = `Json Web Token Expired, Try Again`;
      res.status(400).json({
        success: false,
        message,
      });
    }
    // Other Errors
    res.status(400).json({
      success: false,
      message: "Please provide the input correctly",
    });
  }
};

// login controllers
exports.loginControllers = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // checking if the user  has given email and password

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "please try to login with right crediantils " });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(400)
        .json({ error: "please try to login with right crediantils " });
    }

    const isPasswordMatched = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordMatched) {
      return res
        .status(401)
        .json({ error: "please try to login with right crediantils " });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    // JSON Web Token Error
    if (error.name === "JsonWebTokenError") {
      const message = `Invalid Json Web Token, Try Again With the Correct One`;
      res.status(400).json({
        success: false,
        message,
      });
    }
    // JSON Web Token Expire Error
    if (error.name === "TokenExpiredError") {
      const message = `Json Web Token Expired, Try Again`;
      res.status(400).json({
        success: false,
        message,
      });
    }
    // Other Errors
    res.status(400).json({
      success: false,
      message: "Please provide the input correctly",
    });
  }
};

exports.logoutuser = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged Out Successfully",
    });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      const message = `Json web Token is invalid, Try Again With Right One`;
      res.status(400).json({
        success: false,
        message,
      });
    } else if (error.name === "TokenExpiredError") {
      const message = `Json Web Token is Expired, Try again `;
      res.status(400).json({
        success: false,
        message,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `Resource not found. Invalid: ${error}`,
      });
      next(error);
    }
  }
};

// User Fecth his or her data to show in the Profil e
exports.getAllUserdAta = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      const message = `Json Web Token is Expired, Try again `;
      res.status(400).json({
        success: false,
        message,
      });
    }
    if (error.name === "CastError") {
      return res.status(500).json({
        success: false,
        message: `Resource not found. Invalid: ${error.path}`,
      });
    }
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

    res.status(400).json({
      success: false,
      message: `Intern Server Error|| Bad Request`,
    });
  }
};
