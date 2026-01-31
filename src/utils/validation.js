const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not valid.");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid.");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a strong password.");
  }
};

const validateEditProfileKeys = (req) => {
  const allowedKeys = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "photoUrl",
    "about",
    "skills",
  ];

  // used "every" as we need a boolean output
  const isEditAllowed = Object.keys(req.body).every((key) =>
    allowedKeys.includes(key),
  );

  return isEditAllowed;
};

module.exports = {
  validateSignUpData,
  validateEditProfileKeys,
};
