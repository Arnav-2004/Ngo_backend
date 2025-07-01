const notFound = (req, res) =>
  res.status(404).send("Route does not exist : please check the route)");

export default notFound;
