const userModel = require("../Schema/userSchema");
const bycript = require("bcryptjs");

exports.signUp = async (req, res, next) => {
  try {
    const password = req.body.password;
    const email = req.body.email;
    const hash = await bycript.hash(password, 12);
    const user = await userModel.create({
      email,
      password: hash,
    });

    return await res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
    next();
  } catch (err) {
    // let error = { ...err };
    // console.log(error);

    if (err.name === "ValidationError") {
      // const errors = Object.values(error.errors).map((el) => el.message);
      // const message = `Invalid input data. ${errors.join(". ")}`;
      const message = "invalid Email please try again";

      return await res.status(404).json({
        status: "fail",
        message: message,
      });
    } else if (err.code === 11000) {
      const message = `Duplicate Email found. Please use another Email!`;
      return await res.status(404).json({
        status: "fail",
        message: message,
      });
    } else {
      return await res.status(404).json({
        status: "fail",
        message: err.name,
      });
    }
    next();
  }
  next();
};
exports.logIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return await res.status(404).json({
      status: "fail",
      message: "Enter the email and password",
    });
  }
  const user = await userModel.findOne({ email });
  if (!user) {
    return await res.status(404).json({
      stats: "fail",
      message: "Incorrect Email or Password",
    });
  }
  const isMatch = await bycript.compare(password, user.password);

  if (!isMatch) {
    return await res.status(404).json({
      stats: "fail",
      message: "Incorrect Email or Password",
    });
  }
  return await res.status(200).json({
    status: "success",
    message: "Login Successful",
  });
};
