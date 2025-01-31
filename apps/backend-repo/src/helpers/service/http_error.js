class HttpError extends Error {
    constructor(code, message) {
        super(JSON.stringify({
            code,
            message,
            error: true
        }));
        Object.setPrototypeOf(this, this.constructor.prototype);
    }
    static handle(req, res, err) {
        if (err instanceof this) {
            const error = JSON.parse(err.message);
            console.error(error);
            return res.status(error.code).send(error);
        }
        console.error(err);
        return res.status(500).send({
            code: 500,
            message: `An Server Error occured in server while ${req.method.toUpperCase()} '${req.url}'!`,
            error: true
        });
    }
}
export default HttpError;
