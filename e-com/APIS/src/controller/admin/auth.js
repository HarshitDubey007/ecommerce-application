const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

exports.signup = async (req, res) => {
  try {
    const { email, firstName, lastName, password, country } = req.body;
    const existingUser = await User.findOne({ email }).exec();

    if (existingUser) {
      return res.status(400).json({
        message: "Admin already registered",
      });
    }

    const hash_password = await bcrypt.hash(password, 10);

    const userCount = await User.estimatedDocumentCount();

    let role = "admin";
    if (userCount === 0) {
      role = "super-admin";
    }

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      hash_password,
      username: shortid.generate(),
      role,
      country
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    if (savedUser) {
      return res.status(201).json({
        message: "Admin created successfully",
      });
    } else {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  } catch (error) {
    console.error("Error from admin signup API:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(" email, password :: ", email, password)

    const user = await User.findOne({ email: email })
    console.log("user:: ", user)

    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const isPasswordValid = await user.authenticate(password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    if (user.role !== "admin" && user.role !== "super-admin") {
      return res.status(400).json({ message: "Unauthorized user" });
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const { _id, firstName, lastName, email: userEmail, role, fullName } = user;

    res.cookie("token", token, { expiresIn: "1d" });

    res.status(200).json({
      token,
      user: { _id, firstName, lastName, email: userEmail, role, fullName },
      status: true
    });
  } catch (error) {
    console.error("Error from admin signin API:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout successfully...!",
  });
};
