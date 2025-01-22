export const HOSPITALS = [
  {
    id: 1,
    name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    location: "New Delhi"
  },
  {
    id: 2,
    name: "Christian Medical College (CMC), Vellore",
    location: "Vellore"
  },
  {
    id: 3,
    name: "Apollo Hospitals, Hyderabad",
    location: "Hyderabad"
  },
  {
    id: 4,
    name: "Nizam's Institute of Medical Sciences (NIMS), Hyderabad",
    location: "Hyderabad"
  },
  {
    id: 5,
    name: "King George Hospital (KGH), Visakhapatnam",
    location: "Visakhapatnam"
  },
  {
    id: 6,
    name: "Andhra Hospitals, Vijayawada",
    location: "Vijayawada"
  },
  {
    id: 7,
    name: "Fortis Memorial Research Institute, Gurugram",
    location: "Gurugram"
  },
  {
    id: 8,
    name: "Tata Memorial Hospital, Mumbai",
    location: "Mumbai"
  },
  {
    id: 9,
    name: "Sankara Nethralaya, Chennai",
    location: "Chennai"
  },
  {
    id: 10,
    name: "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    location: "Mumbai"
  }
];

export const DEPARTMENTS = [
  "Emergency Department (ED)",
  "Intensive Care Unit (ICU)",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Oncology",
  "Gastroenterology",
  "Obstetrics and Gynecology (OB/GYN)",
  "Radiology",
  "Pathology",
  "Anesthesia",
  "Surgery",
  "Nephrology",
  "Endocrinology",
  "Dermatology",
  "Psychiatry",
  "Pulmonology",
  "Urology",
  "Hematology",
  "Physical Therapy (Physiotherapy)",
  "Pharmacy",
  "Nutrition and Dietetics",
  "Social Services",
  "Laboratory Services",
  "Radiotherapy",
  "Infectious Disease",
  "Rehabilitation Services",
  "Audiology",
  "Ophthalmology"
];

export const STATES = [
  { id: 1, name: "Andhra Pradesh", area: "Rampachodavaram" },
  { id: 2, name: "Arunachal Pradesh", area: "Anini" },
  { id: 3, name: "Assam", area: "Majuli" },
  { id: 4, name: "Bihar", area: "Valmiki Nagar" },
  { id: 5, name: "Chhattisgarh", area: "Bijapur" },
  { id: 6, name: "Goa", area: "Sanguem" },
  { id: 7, name: "Gujarat", area: "Rann of Kutch" },
  { id: 8, name: "Haryana", area: "Mewat" },
  { id: 9, name: "Himachal Pradesh", area: "Kinnaur" },
  { id: 10, name: "Jharkhand", area: "Latehar" },
  { id: 11, name: "Karnataka", area: "Bylakuppe" },
  { id: 12, name: "Kerala", area: "Wayanad" },
  { id: 13, name: "Madhya Pradesh", area: "Mandla" },
  { id: 14, name: "Maharashtra", area: "Gadchiroli" },
  { id: 15, name: "Manipur", area: "Churachandpur" },
  { id: 16, name: "Meghalaya", area: "Mawsynram" },
  { id: 17, name: "Mizoram", area: "Saiha" },
  { id: 18, name: "Nagaland", area: "Tuensang" },
  { id: 19, name: "Odisha", area: "Malkangiri" },
  { id: 20, name: "Punjab", area: "Gurdaspur" },
  { id: 21, name: "Rajasthan", area: "Barmer" },
  { id: 22, name: "Sikkim", area: "Lachen" },
  { id: 23, name: "Tamil Nadu", area: "Jawadhu Hills" },
  { id: 24, name: "Telangana", area: "Bhadrachalam" },
  { id: 25, name: "Tripura", area: "Dhalai" },
  { id: 26, name: "Uttar Pradesh", area: "Sonbhadra" },
  { id: 27, name: "Uttarakhand", area: "Pithoragarh" },
  { id: 28, name: "West Bengal", area: "Sundarbans" }
];

export const SYMPTOMS = [
  // General Symptoms
  { id: 1, name: 'Fever', category: 'General' },
  { id: 2, name: 'Fatigue or Weakness', category: 'General' },
  
  // Respiratory Symptoms
  { id: 3, name: 'Cough (Dry or Productive)', category: 'Respiratory' },
  { id: 4, name: 'Shortness of Breath', category: 'Respiratory' },
  { id: 5, name: 'Wheezing', category: 'Respiratory' },
  { id: 6, name: 'Chest Pain or Tightness', category: 'Respiratory' },
  { id: 7, name: 'Sore Throat', category: 'Respiratory' },
  { id: 8, name: 'Runny or Stuffy Nose', category: 'Respiratory' },
  { id: 9, name: 'Sneezing', category: 'Respiratory' },
  { id: 10, name: 'Hoarseness', category: 'Respiratory' },

  // Cardiovascular Symptoms
  { id: 11, name: 'Palpitations', category: 'Cardiovascular' },
  { id: 12, name: 'Swelling in Legs or Feet', category: 'Cardiovascular' },
  { id: 13, name: 'Chest Pain or Discomfort', category: 'Cardiovascular' },
  { id: 14, name: 'Fainting or Near-Fainting', category: 'Cardiovascular' },
  { id: 15, name: 'Cold Extremities', category: 'Cardiovascular' },

  // Digestive Symptoms
  { id: 16, name: 'Abdominal Pain or Cramping', category: 'Digestive' },
  { id: 17, name: 'Diarrhea or Constipation', category: 'Digestive' },
  { id: 18, name: 'Bloating', category: 'Digestive' },
  { id: 19, name: 'Heartburn or Acid Reflux', category: 'Digestive' },
  { id: 20, name: 'Gastrointestinal Bleeding', category: 'Digestive' },
  { id: 21, name: 'Jaundice', category: 'Digestive' },
  { id: 22, name: 'Indigestion', category: 'Digestive' },

  // Neurological Symptoms
  { id: 23, name: 'Memory Loss or Confusion', category: 'Neurological' },
  { id: 24, name: 'Seizures', category: 'Neurological' },
  { id: 25, name: 'Numbness or Tingling', category: 'Neurological' },
  { id: 26, name: 'Loss of Coordination', category: 'Neurological' },
  { id: 27, name: 'Visual Changes', category: 'Neurological' },
  { id: 28, name: 'Slurred Speech', category: 'Neurological' },
  { id: 29, name: 'Sleep Disturbances', category: 'Neurological' },

  // Skin Symptoms
  { id: 30, name: 'Rashes or Hives', category: 'Skin' },
  { id: 31, name: 'Itching', category: 'Skin' },
  { id: 32, name: 'Paleness or Cyanosis', category: 'Skin' },
  { id: 33, name: 'Excessive Sweating', category: 'Skin' },
  { id: 34, name: 'Bruising or Bleeding', category: 'Skin' },
  { id: 35, name: 'Dry or Flaky Skin', category: 'Skin' },
  { id: 36, name: 'Hair Loss', category: 'Skin' },

  // Urinary Symptoms
  { id: 37, name: 'Frequent Urination', category: 'Urinary' },
  { id: 38, name: 'Painful Urination', category: 'Urinary' },
  { id: 39, name: 'Blood in Urine', category: 'Urinary' },
  { id: 40, name: 'Dark or Cloudy Urine', category: 'Urinary' },
  { id: 41, name: 'Incontinence', category: 'Urinary' },

  // Musculoskeletal Symptoms
  { id: 42, name: 'Joint Pain or Swelling', category: 'Musculoskeletal' },
  { id: 43, name: 'Muscle Weakness or Cramps', category: 'Musculoskeletal' },
  { id: 44, name: 'Stiffness', category: 'Musculoskeletal' },
  { id: 45, name: 'Bone Pain', category: 'Musculoskeletal' },

  // Mental Health Symptoms
  { id: 46, name: 'Anxiety', category: 'Mental Health' },
  { id: 47, name: 'Depression', category: 'Mental Health' },
  { id: 48, name: 'Irritability', category: 'Mental Health' },
  { id: 49, name: 'Mood Swings', category: 'Mental Health' },
  { id: 50, name: 'Hallucinations', category: 'Mental Health' },
  { id: 51, name: 'Paranoia', category: 'Mental Health' },
  { id: 52, name: 'Suicidal Thoughts', category: 'Mental Health' },

  // Endocrine Symptoms
  { id: 53, name: 'Excessive Thirst or Hunger', category: 'Endocrine' },
  { id: 54, name: 'Hot or Cold Sensitivity', category: 'Endocrine' },
  { id: 55, name: 'Changes in Skin Texture', category: 'Endocrine' },
  { id: 56, name: 'Menstrual Irregularities', category: 'Endocrine' },
  { id: 57, name: 'Unusual Sweating Patterns', category: 'Endocrine' },

  // Immunologic Symptoms
  { id: 58, name: 'Frequent Infections', category: 'Immunologic' },
  { id: 59, name: 'Swollen Lymph Nodes', category: 'Immunologic' },
  { id: 60, name: 'Autoimmune Manifestations', category: 'Immunologic' }
];

export const CAMP_SCHEDULES = [
  {
    department: 'Emergency Department (ED)',
    date: 'Ongoing (24/7)',
    location: 'Uttar Pradesh, Lucknow, Raebareli',
    timing: '24/7 availability'
  },
  {
    department: 'Intensive Care Unit (ICU)',
    date: 'Ongoing (24/7)',
    location: 'Maharashtra, Mumbai, Vasai',
    timing: '24/7 availability'
  },
  {
    department: 'Cardiology',
    date: 'February 1 - February 5',
    location: 'Tamil Nadu, Chennai, Manali',
    timing: '8 AM to 5 PM'
  },
  {
    department: 'Neurology',
    date: 'February 10 - February 15',
    location: 'West Bengal, Kolkata, Baruipur',
    timing: '10 AM to 5 PM'
  },
  {
    department: 'Orthopedics',
    date: 'February 20 - February 25',
    location: 'Kerala, Thiruvananthapuram, Neyyattinkara',
    timing: '8 AM to 5 PM'
  },
  {
    department: 'Pediatrics',
    date: 'February 5 - February 10',
    location: 'Rajasthan, Jaipur, Bassi',
    timing: '10 AM to 5 PM'
  },
  {
    department: 'Oncology',
    date: 'February 15 - February 20',
    location: 'Gujarat, Ahmedabad, Sarkhej',
    timing: '8 AM to 5 PM'
  },
  {
    department: 'Gastroenterology',
    date: 'February 25 - February 28',
    location: 'Karnataka, Bengaluru, Kengeri',
    timing: '8 AM to 5 PM'
  },
  {
    department: 'Obstetrics and Gynecology',
    date: 'February 5 - February 12',
    location: 'Punjab, Amritsar, Chheharta',
    timing: '8 AM to 5 PM'
  },
  {
    department: 'Radiology',
    date: 'February 1 - February 7',
    location: 'Madhya Pradesh, Bhopal, Berasia',
    timing: '8 AM to 5 PM'
  },
  {
    department: 'Pathology',
    date: 'February 8 - February 14',
    location: 'Haryana, Gurgaon, Farrukhnagar',
    timing: '10 AM to 5 PM'
  },
  {
    department: 'Anesthesia',
    date: 'February 10 - February 16',
    location: 'Andhra Pradesh, Visakhapatnam, Anakapalli',
    timing: '8 AM to 5 PM'
  },
  {
    department: 'Surgery',
    date: 'February 12 - February 18',
    location: 'Bihar, Patna, Digha',
    timing: '8 AM to 5 PM'
  },
  {
    department: 'Nephrology',
    date: 'February 7 - February 13',
    location: 'Odisha, Bhubaneswar, Jatni',
    timing: '10 AM to 5 PM'
  },
  {
    department: 'Endocrinology',
    date: 'February 18 - February 24',
    location: 'Uttar Pradesh, Varanasi, Ramnagar',
    timing: '8 AM to 5 PM'
  },
  {
    department: 'Dermatology',
    date: 'February 8 - February 14',
    location: 'Jammu & Kashmir, Srinagar, Pattan',
    timing: '10 AM to 5 PM'
  },
  {
    department: 'Psychiatry',
    date: 'February 20 - February 26',
    location: 'Delhi, New Delhi, Najafgarh',
    timing: '10 AM to 5 PM'
  },
  {
    department: 'Pulmonology',
    date: 'February 2 - February 6',
    location: 'Assam, Guwahati, Sonapur',
    timing: '8 AM to 5 PM'
  },
  {
    department: 'Urology',
    date: 'February 14 - February 18',
    location: 'Maharashtra, Pune, Hadapsar',
    timing: '10 AM to 5 PM'
  },
  {
    department: 'Hematology',
    date: 'February 10 - February 16',
    location: 'Telangana, Hyderabad, Uppal',
    timing: '8 AM to 5 PM'
  }
];

export const MOCK_PATIENTS = [
  {
    id: 1,
    name: "John Doe",
    state: "Telangana",
    area: "Bhadrachalam",
    symptoms: ["Fever", "Cough"]
  },
  {
    id: 2,
    name: "Jane Smith",
    state: "Telangana",
    area: "Bhadrachalam",
    symptoms: ["Headache", "Fatigue"]
  },
  {
    id: 3,
    name: "Bob Johnson",
    state: "Maharashtra",
    area: "Mumbai Central",
    symptoms: ["Fever", "Sore Throat"]
  },
  {
    id: 4,
    name: "Alice Brown",
    state: "Delhi",
    area: "New Delhi",
    symptoms: ["Cough", "Shortness of Breath"]
  }
];
