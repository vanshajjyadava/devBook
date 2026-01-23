const adminAuth = (req, res, next) => {
  console.log("Admin is getting checked !!");
  const token = "x";
  const isAdminAuthorized = token === "xyz";

  if (!isAdminAuthorized) {
    res.status(401).send("Admin is not authorized !!");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User is getting checked !!");
  const token = "x";
  const isUserAuthorized = token === "xyz";

  if (!isUserAuthorized) {
    res.status(401).send("User is not authorized !!");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
