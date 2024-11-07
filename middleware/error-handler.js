const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something Went OnZY MonZY Please try again Later",
  };

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate Value Entered for ${Objec.keys(
      err.keyValue
    )} Field , Please choose another value`;

    customError.statusCode = 400;
  }
};

module.exports = errorHandlerMiddleware;
