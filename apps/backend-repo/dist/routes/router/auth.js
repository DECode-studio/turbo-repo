"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../config/index"));
const auth_1 = __importDefault(require("../../controller/auth"));
class TokenRoute extends index_1.default {
    constructor() {
        super(auth_1.default);
    }
    routes() {
        this.router.post('/get-token', this.bindHandler(auth_1.default.GetToken));
        this.router.post('/check-token', this.bindHandler(auth_1.default.CheckToken));
    }
}
exports.default = new TokenRoute().router;
//# sourceMappingURL=auth.js.map