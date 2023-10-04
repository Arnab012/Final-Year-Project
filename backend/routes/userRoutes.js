const express = require("express");
const {
  registeruser,
  loginControllers,
  logoutuser,
  getAllUserdAta,
} = require("../controllers/userControllers");
const router = express.Router();

const multer = require("multer");
const path = require("path");
const { isAuthenticatedUser } = require("../middleware/Auth");
router.use(express.static("public"));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      path.join(__dirname, "../public/userImage"),
      function (error, success) {
        if (error) throw error;
      }
    );
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name, function (error1, success1) {
      if (error1) throw error1;
    });
  },
});

const uplode = multer({ storage: storage });

// User Route
router.post("/register", uplode.single("image"), registeruser);
router.post("/login", loginControllers);
router.get("/logout", logoutuser);

router.get("/profile", isAuthenticatedUser, getAllUserdAta);

module.exports = router;
