exports.storeMiddleware = (req, res, next) => {
  req.name = 'Drew';
  next();
}

exports.homePage = (req, res) => {
  res.render('index');
}
