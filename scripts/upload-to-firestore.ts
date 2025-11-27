
import { db } from '../src/lib/firebase';
import { universityData } from '../src/lib/universityData';
import { collection, addDoc, writeBatch, getDocs, query } from 'firebase/firestore';

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
    // Firestore will auto-generate an ID for each new document
    const docRef = collection(db, 'universities');
    // We can't use addDoc in a batch, so we create a new doc ref and set it.
    batch.set(docRef.doc(), university);
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
});
