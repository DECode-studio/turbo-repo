"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount = require('../../firebase-config.json');
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    // databaseURL: 'https://test-app-4ca3c.firebaseapp.com'
});
exports.db = firebase_admin_1.default.firestore();
//# sourceMappingURL=firebaseConfig.js.map