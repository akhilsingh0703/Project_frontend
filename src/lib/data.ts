import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Assuming you have initialized Firebase and exported the db instance
import type { University } from './types';

// Get all universities from Firestore
export const getUniversities = async (): Promise<University[]> => {
  const querySnapshot = await getDocs(collection(db, 'universities'));
  const universities = querySnapshot.docs.map((doc) => {
    // Type assertion to University, assuming Firestore data matches the type
    return { id: doc.id, ...doc.data() } as University;
  });
  return universities;
};

// Get a single university by its ID from Firestore
export const getUniversityById = async (id: string): Promise<University | undefined> => {
  const docRef = doc(db, 'universities', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // Type assertion to University, assuming Firestore data matches the type
    return { id: docSnap.id, ...docSnap.data() } as University;
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
    return undefined;
  }
};
