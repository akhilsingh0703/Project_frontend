import * as admin from 'firebase-admin';
import { getApps, cert } from 'firebase-admin/app';

const serviceAccount = require('../../../serviceAccountKey.json');

if (!getApps().length) {
  admin.initializeApp({
    credential: cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
