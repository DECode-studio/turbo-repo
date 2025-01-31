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
const helpers_1 = __importDefault(require("../helpers"));
const userCollection_1 = __importDefault(require("../repository/userCollection"));
class ApiController extends helpers_1.default {
    constructor() {
        super(...arguments);
        this.GetUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUser } = req.query;
                const data = yield userCollection_1.default.GetUser(idUser);
                this.sendHttp(res, 200, data);
            }
            catch (error) {
                console.log(error);
                this.sendHttp(res, 422, error);
            }
        });
        this.AddUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const data = yield userCollection_1.default.AddUser(user);
                this.sendHttp(res, 200, data);
            }
            catch (error) {
                console.log(error);
                this.sendHttp(res, 422, error);
            }
        });
        this.EditUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const data = yield userCollection_1.default.EditUser(user);
                this.sendHttp(res, 200, data);
            }
            catch (error) {
                console.log(error);
                this.sendHttp(res, 422, error);
            }
        });
        this.DeleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUser } = req.query;
                const data = yield userCollection_1.default.DeleteUser(idUser);
                this.sendHttp(res, 200, data);
            }
            catch (error) {
                console.log(error);
                this.sendHttp(res, 422, error);
            }
        });
    }
}
exports.default = new ApiController();
//# sourceMappingURL=api.js.map