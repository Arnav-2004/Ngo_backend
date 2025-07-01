const errorWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      console.log(err, "error");
      next(err);
    }
  };
};

export { errorWrapper };
