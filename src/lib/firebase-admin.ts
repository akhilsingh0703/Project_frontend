
import * as admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';
import serviceAccount from '../../serviceAccountKey.json';

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
