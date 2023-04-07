module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    req.auth = { pass: token };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
