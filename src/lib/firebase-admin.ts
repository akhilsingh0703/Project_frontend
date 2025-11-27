
import * as admin from 'firebase-admin';
import { getApps, cert } from 'firebase-admin/app';
// This is a mock service account. In a real application, you should manage your service account keys securely.
// To prevent errors when the service account key is not present, we will wrap this in a try-catch block.
try {
    const serviceAccount = require('../../serviceAccountKey.json');

    if (!getApps().length) {
      admin.initializeApp({
        credential: cert(serviceAccount),
      });
    }
} catch (error) {
    console.warn("Firebase Admin SDK initialization failed. This is expected if you are running in a client-only environment and have not provided a service account key. The upload script might not work, but the application should function correctly.");
}


const adminDb = getApps().length ? admin.firestore() : null;

export { adminDb };
