
import { University } from './types';

export const universityData: Omit<University, 'id'>[] = [
  {
    name: 'University of Delhi',
    location: {
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
    },
    description:
      'A premier university in India, known for its high standards in teaching and research and attracts eminent scholars to its faculty.',
    website: 'http://www.du.ac.in',
    images: {
        logo: 'https://images.unsplash.com/photo-1646409203769-8a80f02c0ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjcmVzdCUyMGxvZ298ZW58MHx8fHwxNzY0MDk4NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        banner: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc2NDA1NDExNHww&ixlib=rb-4.1.0&q=80&w=1080',
        campus: [
            "https://images.unsplash.com/photo-1646400592070-b337fbfe61f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx1bml2ZXJzaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc2NDA5ODYzNXww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1670528148572-9270351b95bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc2NDA5ODYzNXww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1544531585-f14f463149ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxsZWN0dXJlJTIwaGFsbHxlbnwwfHx8fDE3NjQwNDkxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
        ],
    },
    programs: [
      {
        name: 'B.Tech Computer Science',
        department: 'Engineering',
        duration: '4 years',
      },
      {
        name: 'M.A. Economics',
        department: 'Arts',
        duration: '2 years',
      },
    ],
    tuition: {
      undergraduate: 20000,
      graduate: 15000,
      roomAndBoard: 100000,
    },
    type: 'Public',
    establishedYear: 1922,
    setting: 'Urban',
    studentPopulation: 132435,
    quickFacts: {
        acceptanceRate: 67,
        studentFacultyRatio: '16:1',
        graduationRate: 80,
        satRange: '1200-1400',
        gpa: '3.7'
    },
    courses: [
        { "category": "Undergraduate", "name": "B.A. (Hons) Economics", "rating": 4.5, "reviews": 150, "views": 2500, "fees": 15000, "applicationDate": "2024-06-15", "cutoffRank": "98%", "cutoffExam": "DUET" },
        { "category": "Undergraduate", "name": "B.Com (Hons)", "rating": 4.4, "reviews": 180, "views": 3200, "fees": 16000, "applicationDate": "2024-06-15", "cutoffRank": "99%", "cutoffExam": "DUET" },
        { "category": "Postgraduate", "name": "M.A. English", "rating": 4.6, "reviews": 120, "views": 1800, "fees": 12000, "applicationDate": "2024-07-10", "cutoffRank": "Entrance-based", "cutoffExam": "DUET PG" }
    ],
    financialAid: {
        scholarshipsAvailable: true,
        details: "Merit-based and need-based scholarships are available.",
    },
    admissions: {
        deadline: '2024-08-31',
        requiredDocuments: ['High School Transcript', 'Entrance Exam Score'],
        applicationFee: 1000,
        internationalRequirements: "TOEFL or IELTS scores required.",
    },
    map: {
        address: "University of Delhi, Benito Juarez Marg, South Campus, South Moti Bagh, New Delhi, Delhi 110021, India",
        lat: 28.5983,
        lng: 77.1593,
    },
    notableAlumni: ["Amitabh Bachchan", "Aung San Suu Kyi", "Shah Rukh Khan"],
    popularPrograms: ["Economics", "Commerce", "Political Science"],
  },
  {
    name: 'Indian Institute of Technology Bombay',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
    },
    description:
      'One of the top engineering colleges in India, IIT Bombay is renowned for its flagship programs in engineering and technology.',
    website: 'http://www.iitb.ac.in',
    images: {
        logo: 'https://images.unsplash.com/photo-1634578197578-dd387521fea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjBsb2dvfGVufDB8fHx8MTc2NDA4OTY5OHww&ixlib=rb-4.1.0&q=80&w=1080',
        banner: 'https://images.unsplash.com/photo-1554793000-245d3a3c2a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc2NDA3OTAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
        campus: [
            "https://images.unsplash.com/photo-1650350856922-a8c11869485d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjYW1wdXMlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MDk4NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1733426509854-10931d84009a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxzdHVkZW50cyUyMGxhYnxlbnwwfHx8fDE3NjQwNDM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1590231204765-12b10cedb4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzY0MDQzNjE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
        ],
    },
    programs: [
      {
        name: 'B.Tech Mechanical Engineering',
        department: 'Engineering',
        duration: '4 years',
      },
      {
        name: 'M.Tech Electrical Engineering',
        department: 'Engineering',
        duration: '2 years',
      },
    ],
    tuition: {
      undergraduate: 220000,
      graduate: 175000,
      roomAndBoard: 120000,
    },
    type: 'Public',
    establishedYear: 1958,
    setting: 'Urban',
    studentPopulation: 10000,
     quickFacts: {
        acceptanceRate: 10,
        studentFacultyRatio: '8:1',
        graduationRate: 95,
        satRange: '1450-1570',
        gpa: 'N/A'
    },
    courses: [
        { "category": "Undergraduate", "name": "B.Tech in Computer Science", "rating": 4.8, "reviews": 250, "views": 5000, "fees": 225000, "applicationDate": "2024-05-20", "cutoffRank": "JEE Adv.", "cutoffExam": "JEE Advanced" },
        { "category": "Undergraduate", "name": "B.Tech in Mechanical Engineering", "rating": 4.7, "reviews": 200, "views": 4500, "fees": 225000, "applicationDate": "2024-05-20", "cutoffRank": "JEE Adv.", "cutoffExam": "JEE Advanced" },
        { "category": "Postgraduate", "name": "M.Tech in Electrical Engineering", "rating": 4.9, "reviews": 150, "views": 3000, "fees": 180000, "applicationDate": "2024-04-30", "cutoffRank": "GATE", "cutoffExam": "GATE" }
    ],
    financialAid: {
        scholarshipsAvailable: true,
        details: "Various scholarships and financial assistance schemes are available.",
    },
    admissions: {
        deadline: '2024-07-31',
        requiredDocuments: ['JEE Advanced Score', 'Class 12 Marksheet'],
        applicationFee: 1500,
        internationalRequirements: "Specific requirements for international students are available on the website.",
    },
    map: {
        address: "IIT Bombay, Powai, Mumbai, Maharashtra 400076, India",
        lat: 19.133,
        lng: 72.914,
    },
    notableAlumni: ["Nandan Nilekani", "Sundar Pichai", "Raghuram Rajan"],
    popularPrograms: ["Computer Science", "Mechanical Engineering", "Electrical Engineering"],
  },
  {
    name: 'Indian Institute of Science',
    location: {
      city: 'Bengaluru',
      state: 'Karnataka',
      country: 'India',
    },
    description:
      'A leading institution for scientific research and higher education in India.',
    website: 'https://www.iisc.ac.in',
    images: {
      logo: 'https://picsum.photos/seed/iisc_logo/200/200',
      banner: 'https://picsum.photos/seed/iisc_banner/800/600',
      campus: [
        'https://picsum.photos/seed/iisc_campus1/800/600',
        'https://picsum.photos/seed/iisc_campus2/800/600',
        'https://picsum.photos/seed/iisc_campus3/800/600',
      ],
    },
    programs: [
      {
        name: 'Bachelor of Science (Research)',
        department: 'Science',
        duration: '4 years',
      },
      {
        name: 'M.Tech in Artificial Intelligence',
        department: 'Engineering',
        duration: '2 years',
      },
    ],
    tuition: {
      undergraduate: 150000,
      graduate: 200000,
      roomAndBoard: 80000,
    },
    type: 'Public',
    establishedYear: 1909,
    setting: 'Urban',
    studentPopulation: 4000,
    quickFacts: {
      acceptanceRate: 15,
      studentFacultyRatio: '7:1',
      graduationRate: 97,
      satRange: 'N/A',
      gpa: '3.9'
    },
    courses: [
        { "category": "Undergraduate", "name": "B.S. (Research)", "rating": 4.9, "reviews": 300, "views": 6000, "fees": 160000, "applicationDate": "2024-04-25", "cutoffRank": "JEE Main/Adv.", "cutoffExam": "JEE" },
        { "category": "Postgraduate", "name": "M.Sc. in Life Sciences", "rating": 4.8, "reviews": 180, "views": 3500, "fees": 210000, "applicationDate": "2024-03-31", "cutoffRank": "JAM", "cutoffExam": "JAM" },
        { "category": "PhD", "name": "Ph.D. in Physics", "rating": 4.9, "reviews": 220, "views": 2800, "fees": 25000, "applicationDate": "2024-10-31", "cutoffRank": "GATE/JEST", "cutoffExam": "GATE/JEST" }
    ],
    financialAid: {
      scholarshipsAvailable: true,
      details: 'Full tuition waiver for most Ph.D. students and several scholarships for other degrees.',
    },
    admissions: {
      deadline: 'Varies by program',
      requiredDocuments: ['Academic Transcripts', 'Entrance Exam Scores (GATE, JEE, etc.)'],
      applicationFee: 800,
      internationalRequirements: 'GRE/GMAT and TOEFL/IELTS may be required.',
    },
    map: {
      address: 'CV Raman Rd, Bengaluru, Karnataka 560012, India',
      lat: 13.0219,
      lng: 77.5671,
    },
    notableAlumni: ['C. V. Raman', 'Homi J. Bhabha', 'Vikram Sarabhai'],
    popularPrograms: ['Physics', 'Biology', 'Materials Science'],
  },
];
