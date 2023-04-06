const User = require("../models/users");

exports.userRouteTest = (req, res, next) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      accountType: req.body.accountType
    });
    user.save()
      .then(() => res.status(201).json({ message: "Utilisateur créé" }))
      .catch( error => res.status(500).json({ error }));
}