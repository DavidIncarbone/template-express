function errorsHandler(err, req, res, next) {
    console.log(err.stack.split("\n")[0], "err:" + err.stack.split("\n")[1]);
    res.status(err.StatusCode || 500)
        .json({
            error: err.message,
            status: err.StatusCode || 500
        })
};

module.exports = errorsHandler;