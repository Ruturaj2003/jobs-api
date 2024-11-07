const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something Went OnZY MonZY Please try again Later",
  };

  // Incomplete Input
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
  }

  //Duplicate Val
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate Value Entered for ${Object.keys(
      err.keyValue
    )} Field , Please choose another value`;

    customError.statusCode = 400;
  }
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
