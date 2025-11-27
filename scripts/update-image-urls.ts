
import { adminDb } from '../src/lib/firebase-admin';
import { universityData } from '../src/lib/universityData';
import type { University } from '../src/lib/types';

const updateImageUrls = async () => {
  console.log('Starting to update image URLs in Firestore...');

  if (!adminDb) {
    console.error("Firestore admin database is not initialized. Check your firebase admin configuration.");
    return;
  }

  const universitiesCollectionRef = adminDb.collection('universities');
  const querySnapshot = await universitiesCollectionRef.get();

  if (querySnapshot.empty) {
    console.log('No universities found in Firestore. Please upload data first.');
    return;
  }

  const batch = adminDb.batch();
  let updatedCount = 0;

  querySnapshot.forEach((firestoreDoc) => {
    const firestoreData = firestoreDoc.data() as Omit<University, 'id'>;
    const universityName = firestoreData.name;
    const matchingLocalData = universityData.find(u => u.name === universityName);

    if (matchingLocalData && matchingLocalData.images) {
      const docRef = adminDb.collection('universities').doc(firestoreDoc.id);
      batch.update(docRef, { images: matchingLocalData.images });
      updatedCount++;
      console.log(`Scheduled update for: ${universityName}`);
    } else {
      console.log(`No matching local data or images found for: ${universityName}`);
    }
  });

  if (updatedCount > 0) {
    try {
      await batch.commit();
      console.log(`Successfully updated image URLs for ${updatedCount} universities.`);
    } catch (error) {
      console.error('Error committing batch update:', error);
    }
  } else {
    console.log('No universities were updated.');
  }

  console.log('Image URL update process finished.');
};

updateImageUrls().then(() => {
    console.log('Script finished successfully.');
    process.exit(0);
}).catch(err => {
    console.error("Script failed:", err);
    process.exit(1);
});
