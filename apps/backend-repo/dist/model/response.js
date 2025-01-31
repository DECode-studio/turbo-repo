"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseModel {
    constructor(codeResponse, messageResponse, dataResponse) {
        this.codeResponse = codeResponse;
        this.messageResponse = messageResponse;
        this.dataResponse = dataResponse;
    }
    // Method untuk menampilkan informasi pengguna
    displayResponseInfo() {
        return `User Info:
        ID: ${this.codeResponse}
        Name: ${this.messageResponse}
        Email: ${this.dataResponse}`;
    }
}
exports.default = ResponseModel;
//# sourceMappingURL=response.js.map