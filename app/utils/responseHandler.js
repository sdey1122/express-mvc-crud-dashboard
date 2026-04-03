const codes = require("./responseCodes");

exports.success = (res, data = {}, custom = codes.SUCCESS.OK) => {
  return res.status(custom.code).json({
    success: true,
    code: custom.code,
    message: custom.message,
    data,
  });
};

exports.error = (res, err, custom = codes.ERROR.INTERNAL) => {
  return res.status(custom.code).json({
    success: false,
    code: custom.code,
    message: err.message || custom.message,
  });
};