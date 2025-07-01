const responseUtils = {
  success: (resp, { data, status = 200, message = undefined }) => {
    return resp.status(status).send({ data, success: true, message });
  },
};

export { responseUtils };
