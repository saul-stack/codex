const handleError = (message, status) => {
  const error = new Error(message);
  if (status !== undefined) {
    error.status = status;
  }
  throw error;
};

export default handleError;
