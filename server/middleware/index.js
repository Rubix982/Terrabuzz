module.exports.notFound = (req, res, next) => {
  const error = new Error('ERROR 404');
  res.status(404);
  next(error);
};

module.exports.onError = (error, req, res) => {
  console.log(`Error: ${error.message}`);
  if (error.message) {
    res.json({ message: error.message });
  } else {
    res.json({
      message: 'Some error occurred while processing you request.',
    });
  }
};
