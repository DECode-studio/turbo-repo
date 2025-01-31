"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_form_data_1 = __importDefault(require("express-form-data"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../routes"));
class Server {
    constructor() {
        this.port = process.env.PORT || 3000 || 5000 || 8000;
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(express_form_data_1.default.parse());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(routes_1.default);
    }
    run() {
        this.app.listen(this.port, () => {
            console.log('back end repo api server');
            console.log(`Server listening on http://localhost:${this.port}`);
        });
    }
}
const server = new Server();
server.run();
//# sourceMappingURL=app.js.map