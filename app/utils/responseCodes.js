module.exports = {
  SUCCESS: {
    OK: { code: 200, message: "OK" },
    CREATED: { code: 201, message: "Created successfully" },
  },
  ERROR: {
    BAD_REQUEST: { code: 400, message: "Bad Request" },
    NOT_FOUND: { code: 404, message: "Not Found" },
    INTERNAL: { code: 500, message: "Internal Server Error" },
  },
};