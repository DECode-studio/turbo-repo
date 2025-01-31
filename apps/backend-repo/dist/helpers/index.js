"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = exports.Http = void 0;
const http_1 = __importDefault(require("./service/http"));
const http_error_1 = __importDefault(require("./service/http_error"));
var http_2 = require("./service/http");
Object.defineProperty(exports, "Http", { enumerable: true, get: function () { return __importDefault(http_2).default; } });
var http_error_2 = require("./service/http_error");
Object.defineProperty(exports, "HttpError", { enumerable: true, get: function () { return __importDefault(http_error_2).default; } });
class Handler {
    sendHttp(res, code, data) {
        var response = {
            code: code,
            data: data,
            error: code == 200 ? false : true
        };
        return http_1.default.send(res, response);
    }
    setHttpError({ code, message }) {
        throw new http_error_1.default(code, message !== null && message !== void 0 ? message : '');
    }
    handleHttpError(req, res, error) {
        return http_error_1.default.handle(req, res, error);
    }
}
exports.default = Handler;
//# sourceMappingURL=index.js.map