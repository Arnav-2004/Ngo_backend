class APIError extends Error {
  statusCode;
  success;
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
  }
}

const generateAPIError = async (msg, statusCode) => {
  console.log(msg, statusCode, "error");

  throw new APIError(msg, statusCode);
};

export { generateAPIError, APIError };
