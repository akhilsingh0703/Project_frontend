
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';

// NOTE: This is a partial, temporary Firebase config for the script only.
const firebaseConfig = {
  apiKey: "AIzaSyCw5ei9emypQefTo91rUuQsxSec6MyAPsY",
  authDomain: "studio-6440466613-89ca6.firebaseapp.com",
  projectId: "studio-6440466613-89ca6",
  storageBucket: "studio-6440466613-89ca6.appspot.com",
  messagingSenderId: "97580529198",
  appId: "1:97580529198:web:0c496e23af214f64d691bf",
  databaseURL: "https://studio-6440466613-89ca6-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const findAndFixInvalidImages = async () => {
  const universitiesCollection = collection(db, 'universities');
  console.log('Fetching all university data to check for invalid images...');

  const querySnapshot = await getDocs(universitiesCollection);

  if (querySnapshot.empty) {
    console.log('Universities collection is empty. Nothing to fix.');
    return;
  }
  
  const iitBombayBannerUrl = "https://preview.redd.it/iit-bombay-among-top-50-in-qs-world-rankings-for-electrical-v0-oy0pillxjfoe1.png?width=640&crop=smart&auto=webp&s=52d7f0657248450a49df7437d839dfce22ec9d5e";

  for (const docSnap of querySnapshot.docs) {
    const university = docSnap.data();
    const universityId = docSnap.id;

    if (university.images) {
        let updateNeeded = false;
        const images = university.images;
        
        if (images.banner && !images.banner.startsWith('http')) {
            console.log(`Found invalid banner image URL for ${university.name}: ${images.banner}`);
            if (university.name === 'Indian Institute of Technology Bombay') {
                images.banner = iitBombayBannerUrl;
            } else {
                images.banner = "https://images.unsplash.com/photo-1726390415698-3c60d6b16c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjbGFzc2ljJTIwY2FtcHVzfGVufDB8fHx8MTc2NDI2NTg1MHww&ixlib=rb-4.1.0&q=80&w=1080";
            }
            updateNeeded = true;
        }

        if (images.logo && !images.logo.startsWith('http')) {
            console.log(`Found invalid logo image URL for ${university.name}: ${images.logo}`);
            images.logo = `https://images.unsplash.com/photo-1646640034880-d1ccca55397a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3Jlc3QlMjBsb2dvfGVufDB8fHx8MTc2NDI2NTg1MHww&ixlib=rb-4.1.0&q=80&w=1080`;
            updateNeeded = true;
        }

        if (updateNeeded) {
            const docRef = doc(db, 'universities', universityId);
            try {
                await updateDoc(docRef, { images });
                console.log(`Successfully updated image URLs for ${university.name}`);
            } catch (error) {
                console.error(`Error updating document ${universityId}:`, error);
            }
        }
    }    
  }

  console.log('Finished checking for invalid image URLs.');
};

findAndFixInvalidImages().catch(error => {
  console.error("An unhandled error occurred during the process:", error);
  process.exit(1);
});
