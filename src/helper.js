const createResponse = (h, statusCode, payload) => {
  const response = h.response(payload);
  response.code(statusCode);
  return response;
};

module.exports = {
  createResponse,
};
