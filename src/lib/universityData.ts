import { University } from './types';

export const universityData: Omit<University, 'id'>[] = [
  {
    name: 'Indian Institute of Technology Bombay',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
    },
    description:
      'One of the top engineering colleges in India, IIT Bombay is renowned for its flagship programs in engineering and technology.',
    images: {
      logo: 'https://images.unsplash.com/photo-1761223956853-7c7c12ebff18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxtb2Rlcm4lMjBsb2dvfGVufDB8fHx8MTc2NDIwNTkwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      banner:
        'https://images.unsplash.com/photo-1521713362244-1b5e5d150b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MjA3MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      campus: [
        'https://images.unsplash.com/photo-1706016899218-ebe36844f70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjYW1wdXMlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MTk5MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzdHVkZW50cyUyMGxhYnxlbnwwfHx8fDE3NjQyNjU4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1605299670824-00515e81b924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzY0MjY1ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    website: 'http://www.iitb.ac.in',
    establishedYear: 1958,
    type: 'Public',
    setting: 'Urban',
    studentPopulation: 10000,
    quickFacts: {
      studentFacultyRatio: '8:1',
      acceptanceRate: 10,
      graduationRate: 95,
    },
    tuition: {
      roomAndBoard: 120000,
      undergraduate: 220000,
      graduate: 175000,
    },
    programs: [
      { name: 'B.Tech', department: 'Engineering', duration: '4 Years' },
      { name: 'M.Tech', department: 'Engineering', duration: '2 Years' },
    ],
    popularPrograms: [
      'Computer Science',
      'Mechanical Engineering',
      'Electrical Engineering',
    ],
    financialAid: {
      scholarshipsAvailable: true,
      details: 'Various government and private scholarships are available.',
    },
    admissions: {
      deadline: 'March 31',
      applicationFee: 1500,
      requiredDocuments: ['JEE Advanced Scorecard', '12th Marksheet'],
      internationalRequirements: 'SAT score and TOEFL/IELTS required.',
    },
    map: {
      address: 'IIT Area, Powai, Mumbai, Maharashtra 400076, India',
      lat: 19.1334,
      lng: 72.9154,
    },
    notableAlumni: ['Nandan Nilekani', 'Jairam Ramesh'],
    courses: [
      {
        category: 'Engineering',
        name: 'B.Tech Computer Science',
        rating: 4.8,
        reviews: 150,
        views: 2500,
        fees: 220000,
        applicationDate: '2024-03-31',
        cutoffRank: '1-67',
        cutoffExam: 'JEE Advanced',
      },
      {
        category: 'Engineering',
        name: 'B.Tech Mechanical Engineering',
        rating: 4.7,
        reviews: 120,
        views: 2200,
        fees: 220000,
        applicationDate: '2024-03-31',
        cutoffRank: '68-300',
        cutoffExam: 'JEE Advanced',
      },
    ],
  },
  {
    name: 'University of Delhi',
    location: {
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
    },
    description:
      'A premier university in India, known for its high standards in teaching and research and attracts eminent scholars to its faculty.',
    images: {
      logo: 'https://images.unsplash.com/photo-1646640034880-d1ccca55397a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3Jlc3QlMjBsb2dvfGVufDB8fHx8MTc2NDI2NTg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      banner:
        'https://images.unsplash.com/photo-1726390415698-3c60d6b16c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjbGFzc2ljJTIwY2FtcHVzfGVufDB8fHx8MTc2NDI2NTg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      campus: [
        'https://images.unsplash.com/photo-1646059526212-ac99cd873cbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc2NDI2NTg0OXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1610558751153-154582773d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc2NDI2NTg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxsZWN0dXJlJTIwaGFsbHxlbnwwfHx8fDE3NjQxODEyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    website: 'http://www.du.ac.in',
    establishedYear: 1922,
    type: 'Public',
    setting: 'Urban',
    studentPopulation: 132435,
    quickFacts: {
      studentFacultyRatio: '16:1',
      acceptanceRate: 67,
      graduationRate: 80,
    },
    tuition: {
      roomAndBoard: 100000,
      undergraduate: 20000,
      graduate: 25000,
    },
    programs: [
      { name: 'B.A.', department: 'Arts', duration: '3 Years' },
      { name: 'B.Com', department: 'Commerce', duration: '3 Years' },
    ],
    popularPrograms: ['Economics', 'Commerce', 'Political Science'],
    financialAid: {
      scholarshipsAvailable: true,
      details: 'Multiple scholarships for meritorious and needy students.',
    },
    admissions: {
      deadline: 'May 30',
      applicationFee: 750,
      requiredDocuments: ['CUET Scorecard', '12th Marksheet'],
      internationalRequirements: 'Varies by country and program.',
    },
    map: {
      address: 'University of Delhi, New Delhi, Delhi 110007, India',
      lat: 28.6862,
      lng: 77.2244,
    },
    notableAlumni: ['Amitabh Bachchan', 'Aung San Suu Kyi'],
    courses: [
       {
        category: 'Arts',
        name: 'B.A. (Hons) Economics',
        rating: 4.6,
        reviews: 200,
        views: 3000,
        fees: 20000,
        applicationDate: '2024-05-30',
        cutoffRank: '98-100 Percentile',
        cutoffExam: 'CUET',
      },
    ],
  },
];

    