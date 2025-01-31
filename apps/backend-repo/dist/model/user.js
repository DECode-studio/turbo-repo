"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(idUser, nameUser, emailUser, contactUser) {
        this.idUser = idUser;
        this.nameUser = nameUser;
        this.emailUser = emailUser;
        this.contactUser = contactUser;
    }
    // Method untuk menampilkan informasi pengguna
    displayUserInfo() {
        return `User Info:
      ID: ${this.idUser}
      Name: ${this.nameUser}
      Email: ${this.emailUser}
      Contact: ${this.contactUser}`;
    }
    // Static method untuk mengubah data Firestore menjadi instance User
    static fromFirestore(doc) {
        var _a, _b, _c;
        const data = doc.data();
        return new UserModel(doc.id, (_a = data === null || data === void 0 ? void 0 : data.nameUser) !== null && _a !== void 0 ? _a : '', (_b = data === null || data === void 0 ? void 0 : data.emailUser) !== null && _b !== void 0 ? _b : '', (_c = data === null || data === void 0 ? void 0 : data.contactUser) !== null && _c !== void 0 ? _c : '');
    }
}
exports.default = UserModel;
//# sourceMappingURL=user.js.map