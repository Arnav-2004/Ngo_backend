export const getPaginationOptions = ({
  noLimit,
  limit = !(noLimit ?? false) && 30,
  page = 1,
}) => {
  if (Number(limit) > 30) {
    limit = 30;
  }
  const newLimit = Number(limit);
  const skip = (Number(page) - 1) * Number(limit);

  return {
    limit: newLimit,
    skip,
  };
};
