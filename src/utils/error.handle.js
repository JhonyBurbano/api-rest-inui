
const handleHttp = (res, error, stack = null) => {
  res.status(error?.status || 500);
  res.send({ stack, data: { error: error?.message || error }});
};

export { handleHttp };