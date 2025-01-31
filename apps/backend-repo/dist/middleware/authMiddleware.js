"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../entities/auth"));
class AuthorizationMiddleware {
    checkAuthorization(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const authData = new auth_1.default();
            const { authorization } = req.headers;
            const query = req.query;
            const body = req.body;
            var idUser = (_a = body.idUser) !== null && _a !== void 0 ? _a : query.idUser;
            if (!authorization) {
                const response = {
                    status: 401,
                    message: 'No Unauthorization Token'
                };
                return res.status(401).json(response);
            }
            const isAuthorized = yield authData.verifyToken(authorization.substring(7, authorization.length), idUser);
            if (!isAuthorized) {
                const response = {
                    status: 401,
                    message: 'Unauthorized'
                };
                return res.status(401).json(response);
            }
            next();
        });
    }
}
exports.default = new AuthorizationMiddleware();
//# sourceMappingURL=authMiddleware.js.map