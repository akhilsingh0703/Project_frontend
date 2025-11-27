
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Assuming you have initialized Firebase and exported the db instance
import type { University } from './types';

// Server-side cache for universities
let universityCache: University[] | null = null;

// Get all universities from Firestore with caching
export const getUniversities = async (): Promise<University[]> => {
  // If we have data in cache, return it
  if (universityCache) {
    return universityCache;
  }

  try {
    const querySnapshot = await getDocs(collection(db, 'universities'));
    if (querySnapshot.empty) {
      console.log('No universities found.');
      return [];
    }
    const universities = querySnapshot.docs.map((doc) => {
      // Type assertion to University, assuming Firestore data matches the type
      return { id: doc.id, ...doc.data() } as University;
    });

    // Store the fetched data in the cache
    universityCache = universities;
    
    return universities;
  } catch (error) {
    console.error("Error fetching universities:", error);
    // In case of an error, don't cache and return an empty array to avoid crashing the app
    return [];
  }
};

// Get a single university by its ID from Firestore
export const getUniversityById = async (id: string): Promise<University | undefined> => {
  // First, check the cache for the university
  if (universityCache) {
    const cachedUniversity = universityCache.find(uni => uni.id === id);
    if (cachedUniversity) {
      return cachedUniversity;
    }
  }

  // If not in cache, fetch from Firestore
  try {
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
  } catch (error) {
    console.error(`Error fetching university by ID (${id}):`, error);
    return undefined;
  }
};
