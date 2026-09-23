export interface Doctor {
  id: number;
  name: string;
  title: string;
  specialty: string;
  subSpecialties: string[];
  department: string;
  rating: number;
  reviewCount: number;
  experienceYears: number;
  hospitalAffiliation: string;
  location: string;
  consultationFee: number;
  availabilityStatus: 'Available Today' | 'Next Available' | 'Fully Booked';
  nextAvailableSlot: string;
  image: string;
  bio: string;
  education: string[];
  languages: string[];
  acceptsInsurance: boolean;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins',
    title: 'MD, FCCP',
    specialty: 'Pulmonology',
    subSpecialties: ['Interventional Pulmonology', 'LDCT Screening'],
    department: 'Pulmonary Medicine',
    rating: 4.9,
    reviewCount: 128,
    experienceYears: 14,
    hospitalAffiliation: 'Central Oncology & Chest Institute',
    location: 'Building A, Suite 302',
    consultationFee: 150,
    availabilityStatus: 'Available Today',
    nextAvailableSlot: '2:30 PM Today',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
    bio: 'Specializing in early stage lung nodule evaluation and minimally invasive diagnostic bronchoscopy.',
    education: ['Johns Hopkins School of Medicine', 'Fellowship at Mayo Clinic'],
    languages: ['English', 'Spanish'],
    acceptsInsurance: true,
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    title: 'MD, FACS',
    specialty: 'Thoracic Surgery',
    subSpecialties: ['VATS Lobectomy', 'Thoracic Surgical Oncology'],
    department: 'Surgical Oncology',
    rating: 4.8,
    reviewCount: 94,
    experienceYears: 18,
    hospitalAffiliation: 'Metropolitan Cancer Center',
    location: 'West Wing, 4th Floor',
    consultationFee: 200,
    availabilityStatus: 'Next Available',
    nextAvailableSlot: 'Tomorrow at 10:00 AM',
    image: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Lead thoracic surgeon focusing on video-assisted thoracoscopic surgery (VATS) and lung cancer resection.',
    education: ['Harvard Medical School', 'Residency at Massachusetts General Hospital'],
    languages: ['English', 'Mandarin'],
    acceptsInsurance: true,
  },
  {
    id: 3,
    name: 'Dr. Usman Yousaf',
    title: 'MD, PhD',
    specialty: 'Medical Oncology',
    subSpecialties: ['Targeted Therapy', 'Immunotherapy', 'Lung Carcinoma'],
    department: 'Oncology',
    rating: 4.9,
    reviewCount: 156,
    experienceYears: 12,
    hospitalAffiliation: 'Central Oncology & Chest Institute',
    location: 'Building B, Suite 105',
    consultationFee: 175,
    availabilityStatus: 'Available Today',
    nextAvailableSlot: '4:15 PM Today',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Expert in personalized biomarker testing and targeted systemic therapies for non-small cell lung cancer (NSCLC).',
    education: ['Stanford University School of Medicine'],
    languages: ['English', 'Russian'],
    acceptsInsurance: true,
  },
  {
    id: 4,
    name: 'Dr. Marcus Vance',
    title: 'MD',
    specialty: 'Diagnostic Radiology',
    subSpecialties: ['Low-Dose CT (LDCT)', 'Chest Imaging'],
    department: 'Radiology',
    rating: 4.7,
    reviewCount: 81,
    experienceYears: 10,
    hospitalAffiliation: 'Metropolitan Cancer Center',
    location: 'Imaging Center, Lower Level',
    consultationFee: 130,
    availabilityStatus: 'Next Available',
    nextAvailableSlot: 'Thursday at 9:00 AM',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop',
    bio: 'Radiologist specialized in chest CT interpretation and early screening nodule tracking.',
    education: ['University of Pennsylvania Perelman School of Medicine'],
    languages: ['English'],
    acceptsInsurance: true,
  }
];


export interface Slot {
  ref_id: string;
  slot: string[];
}

const slots: Slot[] = [
  {
    ref_id: "/doctors/doc_1",
    slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
  },
  {
    ref_id: "/doctors/doc_2",
    slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  },
  {
    ref_id: "/doctors/doc_3",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  },
  {
    ref_id: "/doctors/doc_4",
    slot: [
      "09:00",
      "11:00",
      "13:00",
      "15:00",
      "17:00",
      "19:00",
      "21:00",
      "23:00",
    ],
  },
  // {
  //   ref_id: "/doctors/doc_5",
  //   slot: ["10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
  // },
  // {
  //   ref_id: "/doctors/doc_6",
  //   slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00"],
  // },
  // {
  //   ref_id: "/doctors/doc_7",
  //   slot: ["08:30", "10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
  // },
  // {
  //   ref_id: "/doctors/doc_8",
  //   slot: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
  // },
  // {
  //   ref_id: "/doctors/doc_9",
  //   slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  // },
  // {
  //   ref_id: "/doctors/doc_10",
  //   slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
  // },
  // {
  //   ref_id: "/doctors/doc_11",
  //   slot: ["09:30", "11:30", "13:30", "15:30", "17:30", "19:30"],
  // },
  // {
  //   ref_id: "/doctors/doc_12",
  //   slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  // },
  // {
  //   ref_id: "/doctors/doc_13",
  //   slot: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
  // },
];

export { doctors, slots };
