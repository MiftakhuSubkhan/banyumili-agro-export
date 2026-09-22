export interface CompanyInfo {
  name: string;
  tagline: string;
  taglineId: string;
  shortBio: string;
  fullBio: string;
  established: number;
  originCountry: string;
  headquarters: string;
  email: string;
  phone: string;
  whatsapp: string;
  socials: {
    linkedin: string;
    instagram: string;
    whatsapp: string;
    facebook?: string;
  };
}

export interface ValuePillar {
  id: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
  labelId: string;
  description?: string;
}
