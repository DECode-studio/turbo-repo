export default class Http {
    static send(res, data) {
        return res.status(data.code).send({
            ...data,
            error: false
        });
    }
}
