const fs = require("fs");
const bycript = require("bcryptjs");
const user = JSON.parse(fs.readFileSync("./user.json"));

exports.signUp = async (req, res, next) => {
  const password = req.body.password;
  const email = req.body.email;
  const hash = await bycript.hash(password, 12);

  const newId = user[user.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, { email }, { password: hash });

  user.push(newUser);
  fs.writeFile("./user.json", JSON.stringify(user), (err) => {
    return res.status(201).json({
      status: "success",
      data: {
        users: newUser,
      },
    });
  });
};
exports.logIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return await res.status(404).json({
      status: "fail",
      message: "Enter the email and password",
    });
  }
};
