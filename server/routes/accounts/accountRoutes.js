const express = require("express");
const {
  createAccount,
  findAccountByEmail,
  findAccountById,
} = require("./accountController");
const { createToken } = require("../../token/tokenService");
const { verifyToken } = require("../../middleware/verifyToken");

const router = express.Router();
// Create account
router.route("/").post(async (req, res) => {
  const { firstName, lastName, password, role, email, city } = req.body;

  if (!firstName || firstName === "") {
    res.status(400).json({ message: "First name must be provided" });
  }
  if (!lastName || lastName === "") {
    res.status(400).json({ message: "Last name must be provided" });
  }
  if (!password || password === "") {
    res.status(400).json({ message: "Password must be provided" });
  }
  if (!role || role === "") {
    res.status(400).json({ message: "Role must be provided" });
  }
  if (!email || email === "") {
    console.log(true);
    res.status(400).json({ message: "Email must be provided" });
  }

  try {
    const foundAccount = await findAccountByEmail(email);

    if (foundAccount) {
      res.status(400).json({ message: `email '${email}' already exists'` });
      return;
    }

    const account = await createAccount({
      firstName,
      lastName,
      password,
      role,
      email,
      city,
    });

    res.json({ data: account });
  } catch (error) {
    console.log(error, "ERROR");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Account login
router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;

  if (!email || email === "") {
    res.status(400).json({ message: "email must be provided" });
  }

  if (!password || password === "") {
    res.status(400).json({ message: "password must be provided" });
  }

  try {
    const account = await findAccountByEmail(email);

    if (!account) {
      res.status(400).json({ message: "password or email do not match" });
      return;
    }

    // do the password match?
    const isMatch = await account.comparePasswords(password);
    if (!isMatch) {
      res.status(400).json({ message: "password and email do not match" });
      return;
    }

    const token = createToken({ id: account?._id });
    res.cookie("token", token);
    res.status(200).json({ message: "logged in" });
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ message: "internal server error" });
  }
});

module.exports = router;
