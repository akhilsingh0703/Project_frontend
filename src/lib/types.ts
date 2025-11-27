export type University = {
  id: string;
  name: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  description: string;
  images: {
    logo: string;
    banner: string;
    campus: string[];
  };
  website: string;
  establishedYear: number;
  type: 'Public' | 'Private';
  setting: 'Urban' | 'Suburban' | 'Rural';
  studentPopulation: number;
  quickFacts: {
    acceptanceRate: number;
    gpa?: string;
    satRange?: string;
    actRange?: string;
    studentFacultyRatio: string;
    graduationRate: number;
  };
  programs: Program[];
  courses: Course[];
  tuition: {
    undergraduate: number;
    graduate: number;
    roomAndBoard: number;
  };
  financialAid: {
    scholarshipsAvailable: boolean;
    details: string;
  };
  admissions: {
    deadline: string;
    requiredDocuments: string[];
    applicationFee: number;
    internationalRequirements: string;
  };
  map: {
    address: string;
    lat: number;
    lng: number;
  };
  notableAlumni: string[];
  popularPrograms: string[];
};

export type Program = {
  name: string;
  department: string;
  duration: string;
};

export type Course = {
  category: string;
  name: string;
  rating: number;
  reviews: number;
  views: number;
  fees: number;
  applicationDate: string;
  cutoffRank: string;
  cutoffExam: string;
};

    