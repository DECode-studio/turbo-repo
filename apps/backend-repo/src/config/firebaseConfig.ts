import admin from 'firebase-admin';

const serviceAccount = require('../../firebase-config.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: 'https://test-app-4ca3c.firebaseapp.com'
});

export const db = admin.firestore();
