const User = require("../models/users");

exports.createUser = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    accountType: req.body.accountType,
  });
  user
    .save()
    .then(() =>
      res.status(201).json({ message: "Utilisateur créé", id: user._id })
    )
    .catch((error) => res.status(500).json({ error }));
};

exports.getAllUsers = (req, res, next) => {
  if (req.auth.pass != "secret") {
    res.status(401).json({ message: "Non-autorisé" });
  } else {
    console.log("Requête getAllUsers effectuée");
    User.find({})
      .then((users) => res.status(200).json(users))
      .catch((error) => res.status(400).json({ error }));
  }
};
