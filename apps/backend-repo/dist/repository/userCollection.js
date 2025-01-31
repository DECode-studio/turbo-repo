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
const helpers_1 = require("../helpers");
const user_1 = __importDefault(require("../entities/user"));
class UserRepository {
}
_a = UserRepository;
UserRepository.GetUser = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    var userData = new user_1.default();
    var data;
    if (idUser == null || idUser == undefined) {
        data = yield userData.getAllUser();
    }
    else {
        data = yield userData.getUserById(idUser !== null && idUser !== void 0 ? idUser : '');
    }
    return data;
});
UserRepository.AddUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    var userData = new user_1.default();
    var result = yield userData.addUser(user);
    if (!result) {
        const err = {
            code: 422,
            message: "add user data not success"
        };
        throw new helpers_1.HttpError(err.code, (_b = err.message) !== null && _b !== void 0 ? _b : '');
    }
    return "add user data success";
});
UserRepository.EditUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    var userData = new user_1.default();
    var result = yield userData.editUser(user);
    if (!result) {
        const err = {
            code: 422,
            message: "edit user data not success"
        };
        throw new helpers_1.HttpError(err.code, (_b = err.message) !== null && _b !== void 0 ? _b : '');
    }
    return "edit user data success";
});
UserRepository.DeleteUser = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    var userData = new user_1.default();
    var result = yield userData.deleteUser(idUser !== null && idUser !== void 0 ? idUser : '');
    if (idUser == null || idUser == undefined || !result) {
        const err = {
            code: 422,
            message: "delete user data not success"
        };
        throw new helpers_1.HttpError(err.code, (_b = err.message) !== null && _b !== void 0 ? _b : '');
    }
    return "delete user data success";
});
exports.default = UserRepository;
//# sourceMappingURL=userCollection.js.map