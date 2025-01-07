function corsPolicy(req, res, next) {
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