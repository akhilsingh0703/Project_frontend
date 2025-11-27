
import { db } from '../src/lib/firebase';
import { universityData } from '../src/lib/universityData';
import { collection, addDoc } from 'firebase/firestore';

const uploadUniversities = async () => {
  const universitiesCollection = collection(db, 'universities');
  console.log('Starting university data upload...');

  for (const university of universityData) {
    try {
      const docRef = await addDoc(universitiesCollection, university);
      console.log(`Successfully uploaded: ${university.name} with id ${docRef.id}`);
    } catch (error) {
      console.error(`Error uploading ${university.name}:`, error);
    }
  }

  console.log('University data upload finished.');
  // In a client-side script context, we can't just exit the process.
  // This will run in a context where we can assume it completes.
};

// We will assume this script is run in an environment that can execute it.
uploadUniversities();
