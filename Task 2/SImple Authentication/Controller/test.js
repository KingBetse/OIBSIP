exports.signUp = async (req, res, next) => {
  return await res.status(201).json({
    status: "success",
    data: {
      a: req.body,
    },
  });
};
