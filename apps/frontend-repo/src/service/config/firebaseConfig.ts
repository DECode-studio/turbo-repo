import admin from 'firebase-admin';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const serviceAccount = require('../../../firebase-config.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();