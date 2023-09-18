exports.signUp = async (req, res, next) => {
  res.status(200).render("signup");
};
exports.logIn = async (req, res, next) => {
  res.status(200).render("login");
};
exports.home = async (req, res, next) => {
  res.status(200).render("home");
};
