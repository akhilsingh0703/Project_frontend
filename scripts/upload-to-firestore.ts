
import { db } from '../src/lib/firebase';
import { universityData } from '../src/lib/universityData';
import { collection, writeBatch, getDocs, query, doc } from 'firebase/firestore';

const uploadUniversities = async () => {
  const universitiesCollection = collection(db, 'universities');
  
  // Optional: Check if data already exists to avoid duplicates
  const existingData = await getDocs(query(universitiesCollection));
  if (!existingData.empty) {
    console.log('Universities collection is not empty. Skipping upload to prevent duplicates.');
    return;
  }
  
  console.log('Starting university data upload...');
  const batch = writeBatch(db);

  universityData.forEach((university) => {
    // Create a new document reference with an auto-generated ID
    const newDocRef = doc(universitiesCollection);
    batch.set(newDocRef, university);
  });
  
  try {
    await batch.commit();
    console.log(`Successfully uploaded ${universityData.length} universities in a single batch.`);
  } catch (error) {
    console.error(`Error uploading universities:`, error);
  }

  console.log('University data upload finished.');
};

uploadUniversities().catch(error => {
  console.error("An unhandled error occurred during the upload process:", error);
  process.exit(1);
});
