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
const firebaseConfig_1 = require("../config/firebaseConfig");
const user_1 = __importDefault(require("../model/user"));
class UserDataController {
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userRef = firebaseConfig_1.db.collection('UserCollection').doc((_a = user.idUser) !== null && _a !== void 0 ? _a : '');
                yield userRef.set({
                    idUser: user.idUser,
                    nameUser: user.nameUser,
                    emailUser: user.emailUser,
                    contactUser: user.contactUser
                });
                return true;
            }
            catch (error) {
                console.error('Error saving user:', error);
                return false;
            }
        });
    }
    // method untuk memperbarui data User di Firestore
    editUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userRef = firebaseConfig_1.db.collection('UserCollection').doc((_a = user.idUser) !== null && _a !== void 0 ? _a : '');
                yield userRef.update({
                    nameUser: user.nameUser,
                    emailUser: user.emailUser,
                    contactUser: user.contactUser
                });
                return true;
            }
            catch (error) {
                console.error('Error updating user:', error);
                return false;
            }
        });
    }
    // method untuk menghapus data User di Firestore
    deleteUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userRef = firebaseConfig_1.db.collection('UserCollection').doc(idUser);
                yield userRef.delete();
                return true;
            }
            catch (error) {
                console.error('Error deleting user:', error);
                return false;
            }
        });
    }
    // method untuk mengambil data User dari Firestore berdasarkan ID
    getUserById(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userRef = firebaseConfig_1.db.collection('UserCollection').doc(idUser);
                const doc = yield userRef.get();
                if (doc.exists) {
                    return user_1.default.fromFirestore(doc);
                }
                return new user_1.default(); // Tidak ditemukan
            }
            catch (error) {
                console.error('Error getting user by id:', error);
                return new user_1.default(); // Tidak ditemukan
            }
        });
    }
    // method untuk mengambil semua data User dari Firestore
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersSnapshot = yield firebaseConfig_1.db.collection('UserCollection').get();
                const users = [];
                usersSnapshot.forEach(doc => {
                    users.push(user_1.default.fromFirestore(doc));
                });
                return users;
            }
            catch (error) {
                console.error('Error getting all users:', error);
                return [];
            }
        });
    }
}
exports.default = UserDataController;
//# sourceMappingURL=user.js.map