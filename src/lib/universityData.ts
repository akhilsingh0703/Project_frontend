
      
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
      logo: 'https://picsum.photos/seed/delhi_logo/200/200',
      banner: 'https://picsum.photos/seed/delhi_banner/800/600',
      campus: [
        'https://picsum.photos/seed/delhi_campus1/800/600',
        'https://picsum.photos/seed/delhi_campus2/800/600',
        'https://picsum.photos/seed/delhi_campus3/800/600',
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
      undergraduate: 200000,
      graduate: 150000,
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
    },
    courses: [
      {
        category: 'Undergraduate',
        name: 'B.A. (Hons) Economics',
        rating: 4.5,
        reviews: 150,
        views: 2500,
        fees: 15000,
        applicationDate: '2024-06-15',
        cutoffRank: '98%',
        cutoffExam: 'DUET',
      },
      {
        category: 'Undergraduate',
        name: 'B.Com (Hons)',
        rating: 4.4,
        reviews: 180,
        views: 3200,
        fees: 16000,
        applicationDate: '2024-06-15',
        cutoffRank: '99%',
        cutoffExam: 'DUET',
      },
      {
        category: 'Postgraduate',
        name: 'M.A. English',
        rating: 4.6,
        reviews: 120,
        views: 1800,
        fees: 12000,
        applicationDate: '2024-07-10',
        cutoffRank: 'Entrance-based',
        cutoffExam: 'DUET PG',
      },
    ],
    financialAid: {
      scholarshipsAvailable: true,
      details: 'Merit-based and need-based scholarships are available.',
    },
    admissions: {
      deadline: '2024-08-31',
      requiredDocuments: ['High School Transcript', 'Entrance Exam Score'],
      applicationFee: 1000,
      internationalRequirements: 'TOEFL or IELTS scores required.',
    },
    map: {
      address:
        'University of Delhi, Benito Juarez Marg, South Campus, South Moti Bagh, New Delhi, Delhi 110021, India',
      lat: 28.688,
      lng: 77.219,
    },
    notableAlumni: ['Amitabh Bachchan', 'Aung San Suu Kyi', 'Shah Rukh Khan'],
    popularPrograms: ['Economics', 'Commerce', 'Political Science'],
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
      logo: 'https://picsum.photos/seed/iitb_logo/200/200',
      banner: 'https://picsum.photos/seed/iitb_banner/800/600',
      campus: [
        'https://picsum.photos/seed/iitb_campus1/800/600',
        'https://picsum.photos/seed/iitb_campus2/800/600',
        'https://picsum.photos/seed/iitb_campus3/800/600',
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
    },
    courses: [
      {
        category: 'Undergraduate',
        name: 'B.Tech. Computer Science',
        rating: 4.9,
        reviews: 400,
        views: 8000,
        fees: 225000,
        applicationDate: '2024-03-15',
        cutoffRank: 'JEE Adv.',
        cutoffExam: 'JEE',
      },
      {
        category: 'Postgraduate',
        name: 'M.Tech. in Mechanical Eng.',
        rating: 4.8,
        reviews: 150,
        views: 4000,
        fees: 180000,
        applicationDate: '2024-04-10',
        cutoffRank: 'GATE',
        cutoffExam: 'GATE',
      },
    ],
    financialAid: {
      scholarshipsAvailable: true,
      details:
        'Various scholarships and financial assistance schemes are available.',
    },
    admissions: {
      deadline: '2024-07-31',
      requiredDocuments: ['JEE Advanced Score', 'Class 12 Marksheet'],
      applicationFee: 1500,
      internationalRequirements:
        'Specific requirements for international students are available on the website.',
    },
    map: {
      address: 'IIT Bombay, Powai, Mumbai, Maharashtra 400076, India',
      lat: 19.133,
      lng: 72.914,
    },
    notableAlumni: ['Nandan Nilekani', 'Sundar Pichai', 'Raghuram Rajan'],
    popularPrograms: [
      'Computer Science',
      'Mechanical Engineering',
      'Electrical Engineering',
    ],
  },
];

    