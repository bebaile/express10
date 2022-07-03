const authRouter = require("express").Router();

const User = require("../models/user");

authRouter.post("/CheckCredentials", (req, res) => {
  const { email, password } = req.body;
  // verify that the email is associated to an existing user
  // if yes, verify password
  User.findByEmail(email)
    .then((result) => {
      if (result === 0) {
        return Promise.reject("User not found");
      }
      User.verifyPassword(password, result.hashedPassword).then(
        (isPasswordCorrect) => {
          if (isPasswordCorrect) {
            res.status(200).send("Email and password match");
          } else res.status(401).send("Email ou mot de passe incorrect");
        }
      );
    })
    .catch((err) => {
      if (err === "User not found") {
        res.status(404).send("User not found");
      } else {
        res.status(401).send("Email or password doesn't match");
      }
    });
});

module.exports = authRouter;
