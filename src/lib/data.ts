import type { University, Course } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) =>
  PlaceHolderImages.find((img) => img.id === id)?.imageUrl ??
  'https://picsum.photos/seed/placeholder/600/400';

const sampleCourses: Course[] = [
    {
      category: 'B.Tech',
      name: 'Artificial Intelligence & Machine Learning',
      rating: 3.2,
      reviews: 3,
      views: 4,
      fees: 585000,
      applicationDate: '7 July - 30 Jul 2025',
      cutoffRank: '23138',
      cutoffExam: 'AP-EAPCET'
    },
    {
      category: 'B.Tech',
      name: 'Computer Science and Biosciences',
      rating: 4.1,
      reviews: 12,
      views: 25,
      fees: 585000,
      applicationDate: '7 July - 30 Jul 2025',
      cutoffRank: '42654',
      cutoffExam: 'AP-EAPCET'
    },
    {
      category: 'B.Tech',
      name: 'Internet of Things & Cyber Security Including Blockchain Technology',
      rating: 4.5,
      reviews: 8,
      views: 19,
      fees: 585000,
      applicationDate: '7 July - 30 Jul 2025',
      cutoffRank: '35668',
      cutoffExam: 'AP-EAPCET'
    },
    {
      category: 'B.Tech',
      name: 'Electronics & Communication Engineering',
      rating: 4.5,
      reviews: 2,
      views: 10,
      fees: 525000,
      applicationDate: '7 July - 30 Jul 2025',
      cutoffRank: '31925',
      cutoffExam: 'AP-EAPCET'
    },
    {
      category: 'B.Sc',
      name: 'Bachelor of Science [B.Sc] {Hons.} (Agriculture)',
      rating: 4.0,
      reviews: 15,
      views: 30,
      fees: 350000,
      applicationDate: '1 June - 15 Aug 2025',
      cutoffRank: 'N/A',
      cutoffExam: 'Merit-based'
    },
    {
      category: 'B.Pharma',
      name: 'Bachelor of Pharmacy',
      rating: 4.2,
      reviews: 10,
      views: 22,
      fees: 400000,
      applicationDate: '10 June - 20 Aug 2025',
      cutoffRank: '50123',
      cutoffExam: 'NEET'
    },
     {
      category: 'Polytechnic',
      name: 'Diploma in Civil Engineering',
      rating: 3.8,
      reviews: 5,
      views: 15,
      fees: 150000,
      applicationDate: '15 May - 30 Jul 2025',
      cutoffRank: 'N/A',
      cutoffExam: 'State Polytechnic Entrance'
    }
];


export const universities: University[] = [
  {
    id: 'stanford-university',
    name: 'Stanford University',
    location: { city: 'Stanford', country: 'USA' },
    description:
      'Stanford University, located in the heart of Silicon Valley, is renowned for its entrepreneurial spirit, academic excellence, and beautiful campus. It is a private research university known for its programs in science, engineering, and business.',
    images: {
      logo: getImage('stanford-logo'),
      banner: getImage('stanford-banner'),
      campus: [
        getImage('stanford-campus-1'),
        getImage('stanford-campus-2'),
        getImage('stanford-campus-3'),
      ],
    },
    website: 'https://www.stanford.edu',
    establishedYear: 1885,
    type: 'Private',
    setting: 'Suburban',
    studentPopulation: 17246,
    quickFacts: {
      acceptanceRate: 4,
      gpa: '3.96',
      satRange: '1440-1570',
      actRange: '32-35',
      studentFacultyRatio: '5:1',
      graduationRate: 94,
    },
    programs: [
      { name: 'Computer Science', department: 'School of Engineering', duration: '4 years' },
      { name: 'Economics', department: 'School of Humanities and Sciences', duration: '4 years' },
      { name: 'Bioengineering', department: 'School of Engineering', duration: '4 years' },
    ],
    courses: sampleCourses,
    popularPrograms: ['Computer Science', 'Engineering', 'Biology'],
    tuition: {
      undergraduate: 56169,
      graduate: 54315,
      roomAndBoard: 17891,
    },
    financialAid: {
      scholarshipsAvailable: true,
      details: 'Offers need-based financial aid. Families with incomes below $150,000 pay no tuition.',
    },
    admissions: {
      deadline: 'Jan 5',
      requiredDocuments: ['Common App', 'Transcripts', 'Letters of Rec', 'Essays'],
      applicationFee: 90,
      internationalRequirements: 'TOEFL/IELTS scores required.',
    },
    map: {
      address: '450 Serra Mall, Stanford, CA 94305, USA',
      lat: 37.4275,
      lng: -122.1697,
    },
    notableAlumni: ['Larry Page', 'Sergey Brin', 'Tiger Woods'],
  },
  {
    id: 'mit',
    name: 'Massachusetts Institute of Technology',
    location: { city: 'Cambridge', country: 'USA' },
    description:
      'The Massachusetts Institute of Technology is a private land-grant research university in Cambridge, Massachusetts. It is world-renowned for its rigorous academic programs in science, technology, engineering, and mathematics (STEM).',
    images: {
      logo: getImage('mit-logo'),
      banner: getImage('mit-banner'),
      campus: [
        getImage('mit-campus-1'),
        getImage('mit-campus-2'),
        getImage('mit-campus-3'),
      ],
    },
    website: 'https://web.mit.edu',
    establishedYear: 1861,
    type: 'Private',
    setting: 'Urban',
    studentPopulation: 11520,
    quickFacts: {
      acceptanceRate: 7,
      gpa: '4.17',
      satRange: '1510-1580',
      actRange: '34-36',
      studentFacultyRatio: '3:1',
      graduationRate: 95,
    },
    programs: [
        { name: 'Mechanical Engineering', department: 'School of Engineering', duration: '4 years' },
        { name: 'Physics', department: 'School of Science', duration: '4 years' },
        { name: 'Architecture', department: 'School of Architecture and Planning', duration: '5 years' },
    ],
    courses: sampleCourses,
    popularPrograms: ['Engineering', 'Computer Science', 'Mathematics'],
    tuition: {
      undergraduate: 55878,
      graduate: 53790,
      roomAndBoard: 17340,
    },
    financialAid: {
      scholarshipsAvailable: true,
      details: 'MIT provides financial aid to meet 100% of demonstrated need.',
    },
    admissions: {
      deadline: 'Jan 6',
      requiredDocuments: ['MIT Application', 'Transcripts', 'Letters of Rec'],
      applicationFee: 75,
      internationalRequirements: 'English proficiency test required.',
    },
    map: {
      address: '77 Massachusetts Ave, Cambridge, MA 02139, USA',
      lat: 42.3601,
      lng: -71.0942,
    },
    notableAlumni: ['Buzz Aldrin', 'Richard Feynman', 'Kofi Annan'],
  },
  {
    id: 'university-of-toronto',
    name: 'University of Toronto',
    location: { city: 'Toronto', country: 'Canada' },
    description:
      'The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen\'s Park. It was founded by royal charter in 1827 as King\'s College, the first institution of higher learning in Upper Canada.',
    images: {
      logo: getImage('toronto-logo'),
      banner: getImage('toronto-banner'),
      campus: [
        getImage('toronto-campus-1'),
        getImage('toronto-campus-2'),
        getImage('toronto-campus-3'),
      ],
    },
    website: 'https://www.utoronto.ca',
    establishedYear: 1827,
    type: 'Public',
    setting: 'Urban',
    studentPopulation: 95055,
    quickFacts: {
      acceptanceRate: 43,
      studentFacultyRatio: '24:1',
      graduationRate: 86,
    },
    programs: [
      { name: 'Life Sciences', department: 'Faculty of Arts & Science', duration: '4 years' },
      { name: 'Commerce', department: 'Rotman School of Management', duration: '4 years' },
      { name: 'Computer Engineering', department: 'Faculty of Applied Science & Engineering', duration: '4 years' },
    ],
    courses: sampleCourses,
    popularPrograms: ['Life Sciences', 'Commerce', 'Humanities'],
    tuition: {
      undergraduate: 45690,
      graduate: 23630,
      roomAndBoard: 15000,
    },
    financialAid: {
      scholarshipsAvailable: true,
      details: 'Various scholarships and awards for domestic and international students.',
    },
    admissions: {
      deadline: 'Jan 15',
      requiredDocuments: ['OUAC Application', 'Transcripts', 'English Proficiency'],
      applicationFee: 180,
      internationalRequirements: 'Proof of English proficiency required.',
    },
    map: {
      address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
      lat: 43.6629,
      lng: -79.3957,
    },
    notableAlumni: ['Margaret Atwood', 'Lester B. Pearson', 'Frederick Banting'],
  },
  {
    id: 'university-of-oxford',
    name: 'University of Oxford',
    location: { city: 'Oxford', country: 'UK' },
    description: 'The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world\'s second-oldest university in continuous operation.',
    images: {
        logo: getImage('oxford-logo'),
        banner: getImage('oxford-banner'),
        campus: [getImage('oxford-campus-1'), getImage('oxford-campus-2'), getImage('oxford-campus-3')],
    },
    website: 'https://www.ox.ac.uk',
    establishedYear: 1096,
    type: 'Public',
    setting: 'Urban',
    studentPopulation: 24515,
    quickFacts: {
        acceptanceRate: 17,
        studentFacultyRatio: '11:1',
        graduationRate: 95,
    },
    programs: [
        { name: 'Philosophy, Politics and Economics (PPE)', department: 'Social Sciences Division', duration: '3 years' },
        { name: 'Medicine', department: 'Medical Sciences Division', duration: '6 years' },
        { name: 'Law', department: 'Law Faculty', duration: '3 years' },
    ],
    courses: sampleCourses,
    popularPrograms: ['PPE', 'Medicine', 'Law', 'History'],
    tuition: {
        undergraduate: 28950,
        graduate: 26940,
        roomAndBoard: 12000,
    },
    financialAid: {
        scholarshipsAvailable: true,
        details: 'Numerous scholarships available, including the Clarendon Fund and Rhodes Scholarship.',
    },
    admissions: {
        deadline: 'Oct 15',
        requiredDocuments: ['UCAS Application', 'Personal Statement', 'Transcripts', 'Written Work', 'Test Scores'],
        applicationFee: 75,
        internationalRequirements: 'IELTS/TOEFL required. Some courses require admissions tests.',
    },
    map: {
        address: 'Wellington Square, Oxford OX1 2JD, United Kingdom',
        lat: 51.7548,
        lng: -1.2547,
    },
    notableAlumni: ['Stephen Hawking', 'J.R.R. Tolkien', 'Indira Gandhi'],
  },
  {
    id: 'university-of-sydney',
    name: 'University of Sydney',
    location: { city: 'Sydney', country: 'Australia' },
    description: 'The University of Sydney is an Australian public research university in Sydney, Australia. Founded in 1850, it was Australia\'s first university and is regarded as one of the country\'s leading universities.',
    images: {
        logo: getImage('sydney-logo'),
        banner: getImage('sydney-banner'),
        campus: [getImage('sydney-campus-1'), getImage('sydney-campus-2'), getImage('sydney-campus-3')],
    },
    website: 'https://www.sydney.edu.au',
    establishedYear: 1850,
    type: 'Public',
    setting: 'Urban',
    studentPopulation: 69000,
    quickFacts: {
        acceptanceRate: 30,
        studentFacultyRatio: '20:1',
        graduationRate: 85,
    },
    programs: [
        { name: 'Bachelor of Arts', department: 'Faculty of Arts and Social Sciences', duration: '3 years' },
        { name: 'Bachelor of Commerce', department: 'University of Sydney Business School', duration: '3 years' },
        { name: 'Bachelor of Science (Advanced)', department: 'Faculty of Science', duration: '3 years' },
    ],
    courses: sampleCourses,
    popularPrograms: ['Arts', 'Commerce', 'Science', 'Health Sciences'],
    tuition: {
        undergraduate: 45000,
        graduate: 46500,
        roomAndBoard: 20000,
    },
    financialAid: {
        scholarshipsAvailable: true,
        details: 'A wide range of scholarships for international and domestic students based on merit and need.',
    },
    admissions: {
        deadline: 'Jan 31',
        requiredDocuments: ['Online Application', 'Transcripts', 'English Proficiency'],
        applicationFee: 125,
        internationalRequirements: 'IELTS/TOEFL/PTE scores required.',
    },
    map: {
        address: 'Camperdown NSW 2006, Australia',
        lat: -33.8888,
        lng: 151.1891,
    },
    notableAlumni: ['John Howard', 'Michael Kirby', 'Rose Byrne'],
  },
  {
    id: 'eth-zurich',
    name: 'ETH Zurich',
    location: { city: 'Zürich', country: 'Switzerland' },
    description: 'ETH Zurich is a public research university in the city of Zürich, Switzerland. Founded by the Swiss Federal Government in 1854, it focuses on science, technology, engineering, and mathematics.',
    images: {
        logo: getImage('eth-logo'),
        banner: getImage('eth-banner'),
        campus: [getImage('eth-campus-1'), getImage('eth-campus-2'), getImage('eth-campus-3')],
    },
    website: 'https://ethz.ch',
    establishedYear: 1855,
    type: 'Public',
    setting: 'Urban',
    studentPopulation: 22195,
    quickFacts: {
        acceptanceRate: 27,
        studentFacultyRatio: '15:1',
        graduationRate: 90,
    },
    programs: [
        { name: 'Computer Science', department: 'Department of Computer Science', duration: '3 years' },
        { name: 'Mechanical Engineering', department: 'Department of Mechanical and Process Engineering', duration: '3 years' },
        { name: 'Chemistry', department: 'Department of Chemistry and Applied Biosciences', duration: '3 years' },
    ],
    courses: sampleCourses,
    popularPrograms: ['Engineering', 'Natural Sciences', 'Architecture'],
    tuition: {
        undergraduate: 1460,
        graduate: 1460,
        roomAndBoard: 18000,
    },
    financialAid: {
        scholarshipsAvailable: true,
        details: 'Excellence Scholarship & Opportunity Programme for outstanding Master\'s students.',
    },
    admissions: {
        deadline: 'Apr 30',
        requiredDocuments: ['Online Application', 'Transcripts', 'Entrance Exam (for some)'],
        applicationFee: 150,
        internationalRequirements: 'Proficiency in German or English, depending on the program.',
    },
    map: {
        address: 'Rämistrasse 101, 8092 Zürich, Switzerland',
        lat: 47.3769,
        lng: 8.5417,
    },
    notableAlumni: ['Albert Einstein', 'John von Neumann', 'Wilhelm Röntgen'],
  },
  {
    id: 'national-university-of-singapore',
    name: 'National University of Singapore',
    location: { city: 'Singapore', country: 'Singapore' },
    description: 'The National University of Singapore (NUS) is a national research university in Singapore. Founded in 1905 as the Straits Settlements and Federated Malay States Government Medical School, NUS is the oldest autonomous university in the country.',
    images: {
        logo: getImage('nus-logo'),
        banner: getImage('nus-banner'),
        campus: [getImage('nus-campus-1'), getImage('nus-campus-2'), getImage('nus-campus-3')],
    },
    website: 'https://www.nus.edu.sg',
    establishedYear: 1905,
    type: 'Public',
    setting: 'Urban',
    studentPopulation: 42600,
    quickFacts: {
        acceptanceRate: 25,
        studentFacultyRatio: '17:1',
        graduationRate: 89,
    },
    programs: [
        { name: 'Business Administration', department: 'NUS Business School', duration: '3-4 years' },
        { name: 'Computing (Computer Science)', department: 'School of Computing', duration: '4 years' },
        { name: 'Medicine', department: 'Yong Loo Lin School of Medicine', duration: '5 years' },
    ],
    courses: sampleCourses,
    popularPrograms: ['Business', 'Computing', 'Engineering'],
    tuition: {
        undergraduate: 17550,
        graduate: 19050,
        roomAndBoard: 4500,
    },
    financialAid: {
        scholarshipsAvailable: true,
        details: 'ASEAN Undergraduate Scholarship and other merit-based and need-based financial aid options.',
    },
    admissions: {
        deadline: 'Mar 3',
        requiredDocuments: ['Online Application', 'High School Transcript', 'Standardized Test Scores'],
        applicationFee: 20,
        internationalRequirements: 'English proficiency tests may be required.',
    },
    map: {
        address: '21 Lower Kent Ridge Rd, Singapore 119077',
        lat: 1.2966,
        lng: 103.7764,
    },
    notableAlumni: ['Lee Kuan Yew', 'Goh Chok Tong', 'Margaret Chan'],
  },
  {
    id: 'university-college-london',
    name: 'University College London',
    location: { city: 'London', country: 'UK' },
    description: 'UCL, London\'s Global University, is a public research university in London, England. It is a member institution of the federal University of London, and is the second-largest university in the United Kingdom by total enrolment.',
    images: {
        logo: getImage('ucl-logo'),
        banner: getImage('ucl-banner'),
        campus: [getImage('ucl-campus-1'), getImage('ucl-campus-2'), getImage('ucl-campus-3')],
    },
    website: 'https://www.ucl.ac.uk',
    establishedYear: 1826,
    type: 'Public',
    setting: 'Urban',
    studentPopulation: 42000,
    quickFacts: {
        acceptanceRate: 11,
        studentFacultyRatio: '10:1',
        graduationRate: 92,
    },
    programs: [
        { name: 'Economics', department: 'Department of Economics', duration: '3 years' },
        { name: 'Psychology', department: 'Division of Psychology and Language Sciences', duration: '3 years' },
        { name: 'Architecture', department: 'The Bartlett School of Architecture', duration: '3 years' },
    ],
    courses: sampleCourses,
    popularPrograms: ['Arts & Humanities', 'Psychology', 'Medicine'],
    tuition: {
        undergraduate: 24500,
        graduate: 25770,
        roomAndBoard: 14000,
    },
    financialAid: {
        scholarshipsAvailable: true,
        details: 'UCL Global Undergraduate Scholarships and various other bursaries and awards.',
    },
    admissions: {
        deadline: 'Jan 26',
        requiredDocuments: ['UCAS Application', 'Personal Statement', 'References', 'Transcripts'],
        applicationFee: 80,
        internationalRequirements: 'IELTS/TOEFL scores required.',
    },
    map: {
        address: 'Gower St, London WC1E 6BT, United Kingdom',
        lat: 51.5246,
        lng: -0.1340,
    },
    notableAlumni: ['Alexander Graham Bell', 'Chris Martin', 'Christopher Nolan'],
  }
];

export const getUniversities = () => universities;

export const getUniversityById = (id: string) => {
  return universities.find((uni) => uni.id === id);
};
