const { UnauthenticatedError } = require("../errors");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  //Header Check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Invalid Authentication");
  }
  /**
 * Splitting the String: authHeader.split(" ") splits this string 
 * into an array based on spaces, resulting in:
   ["Bearer", "abc123def456"]
 */
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    //Attach user to Job Route
    req.user = { userId: payload.userId, name: payload.name };
  } catch (error) {
    throw new UnauthenticatedError("");
  }
};

module.exports = auth;
