"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const index_1 = __importDefault(require("./config/index"));
const auth_1 = __importDefault(require("./router/auth"));
const user_1 = __importDefault(require("./router/user"));
class Routes extends index_1.default {
    routes() {
        this.router.use('/api/auth', auth_1.default);
        this.router.use('/api/user', user_1.default);
        this.router.use('*', (req, res) => {
            helpers_1.Http.send(res, {
                code: 404,
                message: 'Sorry, HTTP resource you are looking for was not found.',
                error: true
            });
        });
    }
}
exports.default = new Routes().router;
//# sourceMappingURL=index.js.map