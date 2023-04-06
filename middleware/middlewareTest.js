module.exports = (req, res, next) => {
  try {
    req.body.password = "coucou le password";
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
