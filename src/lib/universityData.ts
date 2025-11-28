
import type { University } from './types';

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
      logo: 'https://picsum.photos/seed/delhi-logo/200/200',
      banner: 'https://picsum.photos/seed/delhi-banner/800/600',
      campus: [
        'https://picsum.photos/seed/delhi-campus1/800/600',
        'https://picsum.photos/seed/delhi-campus2/800/600',
        'https://picsum.photos/seed/delhi-campus3/800/600',
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
    type: 'Public',
    establishedYear: 1922,
    setting: 'Urban',
    studentPopulation: 132435,
    quickFacts: {
        acceptanceRate: 67,
        studentFacultyRatio: '16:1',
        graduationRate: 80,
    },
    tuition: {
        undergraduate: 20000,
        graduate: 15000,
        roomAndBoard: 100000,
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
    name: 'Centurion University of Technology and Management',
    location: {
      city: 'Bhubaneswar',
      state: 'Odisha',
      country: 'India',
    },
    description: "Centurion University's School of Management in Bhubaneswar is best described by its focus on skill-integrated education and industry relevance, aligning its curriculum with the requirements of Industry 4.0. It aims to develop strategic and operational skills through a combination of coursework and job-readiness courses like Data Analytics, Retail Sales, and IELTS prep. The school also emphasizes holistic development through leadership, collaboration, and communication skills, and is committed to social outreach and the UN's Sustainable Development Goals (SDGs).",
    images: {
      logo: 'https://images.shiksha.com/mediadata/images/1650542874phpqTvh4T.jpeg',
      banner: 'https://images.shiksha.com/mediadata/images/1650542961phpkgitSL.jpeg',
      campus: [
        'https://picsum.photos/seed/cutm-campus1/800/600',
        'https://picsum.photos/seed/cutm-campus2/800/600',
        'https://picsum.photos/seed/cutm-campus3/800/600',
      ],
    },
    website: 'https://cutm.ac.in/',
    establishedYear: 2005,
    type: 'Private',
    setting: 'Urban',
    studentPopulation: 6000,
    quickFacts: {
      gpa: '3.5',
      satRange: '1200-1400',
      actRange: '24-30',
      acceptanceRate: 72.5,
      studentFacultyRatio: '15:1',
      graduationRate: 89.3,
    },
    programs: [
      {
        name: 'B.E. / B.Tech',
        department: 'Engineering',
        duration: '4 years',
      },
      {
        name: 'B.Sc.',
        department: 'Agriculture',
        duration: '4 years',
      },
    ],
    courses: [
      {
        category: 'Engineering',
        name: 'B.Tech Computer Science',
        rating: 4.2,
        reviews: 10,
        views: 1500,
        fees: 150000,
        applicationDate: '25 Dec - 25 May 2025',
        cutoffRank: 'CUEE Rank',
        cutoffExam: 'CUEE',
      },
    ],
    financialAid: {
      scholarshipsAvailable: true,
      details: 'Various state and national level scholarships are accepted.',
    },
    admissions: {
      deadline: '2 Sept',
      requiredDocuments: [
        '10th and 12th Marksheet', 'CUEE Scorecard', 'ID Proof'
      ],
      applicationFee: 600,
      internationalRequirements: 'As per university norms',
    },
    tuition: {
        undergraduate: 150000,
        graduate: 200000,
        roomAndBoard: 80000,
    },
    map: {
        address: 'Ramchandrapur, Jatni, Bhubaneswar, Odisha 752050, India',
        lat: 20.149,
        lng: 85.706,
    },
    notableAlumni: [],
    popularPrograms: ['B.Tech', 'B.Sc Agriculture', 'MBA'],
  },
];
