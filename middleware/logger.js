function logger(req, res, next) {
  const time = new Date().toLocaleString();
  console.log("Method: "+req.method + " " +"URL: "+ req.url + " - " + time);
  next();
}

module.exports = logger;
