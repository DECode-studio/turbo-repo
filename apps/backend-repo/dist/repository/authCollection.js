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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../entities/auth"));
class AuthRepository {
}
_a = AuthRepository;
AuthRepository.GetToken = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    var authData = new auth_1.default();
    var data = authData.createToken(idUser !== null && idUser !== void 0 ? idUser : '');
    return data;
});
AuthRepository.CheckToken = (token, idUser) => __awaiter(void 0, void 0, void 0, function* () {
    var authData = new auth_1.default();
    var result = yield authData.verifyToken(token !== null && token !== void 0 ? token : '', idUser !== null && idUser !== void 0 ? idUser : '');
    var data = {
        message: result ? "token and user id match" : "token and user id not match",
        token: token,
        idUser: idUser
    };
    return data;
});
exports.default = AuthRepository;
//# sourceMappingURL=authCollection.js.map