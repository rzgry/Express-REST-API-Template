const createError = require('http-errors');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  // if err message is safe to expose to client or we are in development mode
  if (err.expose === true || process.env.NODE_ENV === 'development') {
    res.status(err.status || 500).send(err);
  } else {
    res.status(500).send(createError.InternalServerError());
  }
};

module.exports = errorHandler;
