const express = require("express");
const profileRouter = express.Router();
const bcrypt = require("bcrypt");
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileKeys } = require("../utils/validation");

// GET API - user profile
profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      throw new Error("User does not exits!");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// PATCH API - edit user profile
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileKeys(req)) {
      throw new Error("Invalid edit request !");
    }

    const loggedInUser = req.user;
    // used forEach to iterate over every key
    Object.keys(req.body).forEach((key) => {
      loggedInUser[key] = req.body[key];
    });

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, your profile update was successful.`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user; // from userAuth
    const { existingPassword, newPassword } = req.body;

    // Validate existing password
    const isPasswordValid =
      await loggedInUser.validatePassword(existingPassword);

    if (!isPasswordValid) {
      throw new Error("Existing password is not correct !");
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    loggedInUser.password = hashedNewPassword;

    // Save user
    await loggedInUser.save();

    res.send("Password updated successfully!");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = profileRouter;
