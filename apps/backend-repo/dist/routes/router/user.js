"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../config/index"));
const api_1 = __importDefault(require("../../controller/api"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
class UserRoute extends index_1.default {
    constructor() {
        super(api_1.default);
    }
    routes() {
        this.router.get('/get-user', authMiddleware_1.default.checkAuthorization, this.bindHandler(api_1.default.GetUser));
        this.router.post('/add-user', authMiddleware_1.default.checkAuthorization, this.bindHandler(api_1.default.AddUser));
        this.router.post('/edit-user', authMiddleware_1.default.checkAuthorization, this.bindHandler(api_1.default.EditUser));
        this.router.post('/delete-user', authMiddleware_1.default.checkAuthorization, this.bindHandler(api_1.default.DeleteUser));
    }
}
exports.default = new UserRoute().router;
//# sourceMappingURL=user.js.map