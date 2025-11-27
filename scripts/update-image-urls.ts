
import { collection, getDocs, doc, writeBatch } from 'firebase/firestore';
import { db } from '../src/lib/firebase';
import { universityData } from '../src/lib/universityData';
import type { University } from '../src/lib/types';

const updateImageUrls = async () => {
  console.log('Starting to update image URLs in Firestore...');

  if (!db) {
    console.error("Firestore database is not initialized. Check your firebase configuration.");
    return;
  }

  const universitiesCollectionRef = collection(db, 'universities');
  const querySnapshot = await getDocs(universitiesCollectionRef);

  if (querySnapshot.empty) {
    console.log('No universities found in Firestore. Please upload data first.');
    return;
  }

  const batch = writeBatch(db);
  let updatedCount = 0;

  querySnapshot.forEach((firestoreDoc) => {
    const firestoreData = firestoreDoc.data() as Omit<University, 'id'>;
    const universityName = firestoreData.name;
    const matchingLocalData = universityData.find(u => u.name === universityName);

    if (matchingLocalData && matchingLocalData.images) {
      const docRef = doc(db, 'universities', firestoreDoc.id);
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
  // The script will exit automatically.
};

updateImageUrls().then(() => {
    console.log('Script finished successfully.');
    // In a standalone script, you might use process.exit(0), but it's not needed here as the function will complete and the process will terminate.
}).catch(err => {
    console.error("Script failed:", err);
    // In a standalone script, you might use process.exit(1) for errors.
});
