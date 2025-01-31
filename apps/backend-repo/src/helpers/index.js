import Http from './service/http';
import HttpError from './service/http_error';
export { default as Http } from './service/http';
export { default as HttpError } from './service/http_error';
class Handler {
    sendHttp(res, code, data) {
        var response = {
            code: code,
            data: data,
            error: code == 200 ? false : true
        };
        return Http.send(res, response);
    }
    setHttpError({ code, message }) {
        throw new HttpError(code, message ?? '');
    }
    handleHttpError(req, res, error) {
        return HttpError.handle(req, res, error);
    }
}
export default Handler;
