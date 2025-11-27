
import { db } from '../src/lib/firebase';
import { universityData } from '../src/lib/universityData';
import { collection, writeBatch, getDocs, query, doc } from 'firebase/firestore';
import type { University } from '../src/lib/types';

const uploadUniversities = async () => {
  const universitiesCollection = collection(db, 'universities');
  
  console.log('Starting university data upload... This will overwrite existing data.');
  const batch = writeBatch(db);

  universityData.forEach((university) => {
    const newDocRef = doc(universitiesCollection);
    
    // Ensure the data conforms to the University type, especially image paths
    const transformedUniversity: Omit<University, 'id'> = {
      ...university,
      images: {
        logo: university.images.logo.startsWith('http') ? university.images.logo : `https://picsum.photos/seed/${newDocRef.id}-logo/200/200`,
        banner: university.images.banner.startsWith('http') ? university.images.banner : `https://picsum.photos/seed/${newDocRef.id}-banner/600/400`,
        campus: (university.images.campus.length > 0 && university.images.campus.every(img => img.startsWith('http'))) ? university.images.campus : [
          `https://picsum.photos/seed/${newDocRef.id}-campus1/800/600`,
          `https://picsum.photos/seed/${newDocRef.id}-campus2/800/600`,
          `https://picsum.photos/seed/${newDocRef.id}-campus3/800/600`,
        ],
      },
    };
    batch.set(newDocRef, transformedUniversity);
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
