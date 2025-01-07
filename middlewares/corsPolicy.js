function corsPolicy(req, res, next) {
<<<<<<< HEAD
    res.setHeader(`Access-Control-Allow-Origin`, `*`)

    res.setHeader(
        `Access-Control-Allow-Methods`,
        `GET,POST,PUT,PATCH,DELETE`
    );

    res.setHeader(
        `Access-Control-Allow-Headers`,
        `X-Requested-With,content-type`
    );

    res.setHeader(`Access-Control-Allow-Credentials`, true);

    next();
}

module.exports = corsPolicy;
=======
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
}

module.exports = corsPolicy;
>>>>>>> 844718134f9db32808982099456f5e2217b00bab
