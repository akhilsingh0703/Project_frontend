import * as admin from 'firebase-admin';
import { getApps, cert } from 'firebase-admin/app';
// This is a mock service account. In a real application, you should manage your service account keys securely.
import serviceAccount from '../../serviceAccountKey.json';

if (!getApps().length) {
  admin.initializeApp({
    credential: cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
