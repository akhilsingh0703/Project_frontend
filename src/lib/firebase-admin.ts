
import * as admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';
import serviceAccount from '../../serviceAccountKey.json';

// This is a placeholder check. In a real-world scenario, you'd use environment variables.
if (serviceAccount.project_id !== 'your-project-id') {
  if (!getApps().length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
}

const adminDb = getApps().length ? admin.firestore() : null;

export { adminDb };
