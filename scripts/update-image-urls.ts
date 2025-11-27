
import { collection, getDocs, doc, writeBatch } from 'firebase/firestore';
import { db } from '../src/lib/firebase';
import { universityData } from '../src/lib/universityData';

const updateImageUrls = async () => {
  console.log('Starting to update image URLs in Firestore...');

  const universitiesCollectionRef = collection(db, 'universities');
  const querySnapshot = await getDocs(universitiesCollectionRef);

  if (querySnapshot.empty) {
    console.log('No universities found in Firestore. Please upload data first.');
    return;
  }

  const batch = writeBatch(db);
  let updatedCount = 0;

  querySnapshot.forEach((firestoreDoc) => {
    const universityName = firestoreDoc.data().name;
    const matchingLocalData = universityData.find(u => u.name === universityName);

    if (matchingLocalData) {
      const docRef = doc(db, 'universities', firestoreDoc.id);
      batch.update(docRef, { images: matchingLocalData.images });
      updatedCount++;
      console.log(`Scheduled update for: ${universityName}`);
    } else {
      console.log(`No matching local data found for: ${universityName}`);
    }
  });

  try {
    await batch.commit();
    console.log(`Successfully updated image URLs for ${updatedCount} universities.`);
  } catch (error) {
    console.error('Error committing batch update:', error);
  }

  console.log('Image URL update process finished.');
  // The script will exit automatically.
};

updateImageUrls().then(() => {
    // Manually exit to prevent the script from hanging.
    process.exit(0);
}).catch(err => {
    console.error("Script failed:", err);
    process.exit(1);
});

    