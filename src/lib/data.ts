
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Assuming you have initialized Firebase and exported the db instance
import type { University } from './types';

// Server-side cache for universities
let universityCache: University[] | null = null;

// Helper to ensure a university object has valid data
const sanitizeUniversity = (uni: any, id: string): University => {
  return {
    id: id,
    name: uni.name || 'Unknown University',
    location: uni.location || { city: 'Unknown', state: 'Unknown', country: 'Unknown' },
    description: uni.description || '',
    images: {
      logo: uni.images?.logo || `https://picsum.photos/seed/${id}-logo/200/200`,
      banner: uni.images?.banner || `https://picsum.photos/seed/${id}-banner/600/400`,
      campus: Array.isArray(uni.images?.campus) && uni.images.campus.length > 0 ? uni.images.campus : [
        `https://picsum.photos/seed/${id}-campus1/800/600`,
        `https://picsum.photos/seed/${id}-campus2/800/600`,
        `https://picsum.photos/seed/${id}-campus3/800/600`,
      ],
    },
    website: uni.website || '',
    establishedYear: uni.establishedYear || 0,
    type: uni.type || 'Private',
    setting: uni.setting || 'Urban',
    studentPopulation: uni.studentPopulation || 0,
    quickFacts: uni.quickFacts || { acceptanceRate: 0, studentFacultyRatio: 'N/A', graduationRate: 0 },
    tuition: uni.tuition || { undergraduate: 0, graduate: 0, roomAndBoard: 0 },
    programs: Array.isArray(uni.programs) ? uni.programs : [],
    courses: Array.isArray(uni.courses) ? uni.courses : [],
    financialAid: uni.financialAid || { scholarshipsAvailable: false, details: '' },
    admissions: uni.admissions || { deadline: 'N/A', requiredDocuments: [], applicationFee: 0, internationalRequirements: '' },
    map: uni.map || { address: '', lat: 0, lng: 0 },
    notableAlumni: Array.isArray(uni.notableAlumni) ? uni.notableAlumni : [],
    popularPrograms: Array.isArray(uni.popularPrograms) ? uni.popularPrograms : [],
  };
};

// Get all universities from Firestore with caching
export const getUniversities = async (): Promise<University[]> => {
  if (universityCache) {
    return universityCache;
  }

  try {
    const querySnapshot = await getDocs(collection(db, 'universities'));
    if (querySnapshot.empty) {
      console.log('No universities found.');
      return [];
    }
    const universities = querySnapshot.docs.map((doc) =>
      sanitizeUniversity(doc.data(), doc.id)
    );

    universityCache = universities;
    
    return universities;
  } catch (error) {
    console.error("Error fetching universities:", error);
    return [];
  }
};

// Get a single university by its ID from Firestore
export const getUniversityById = async (id: string): Promise<University | undefined> => {
  if (universityCache) {
    const cachedUniversity = universityCache.find(uni => uni.id === id);
    if (cachedUniversity) {
      return cachedUniversity;
    }
  }

  try {
    const docRef = doc(db, 'universities', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return sanitizeUniversity(docSnap.data(), docSnap.id);
    } else {
      console.log('No such document!');
      return undefined;
    }
  } catch (error) {
    console.error(`Error fetching university by ID (${id}):`, error);
    return undefined;
  }
};
