export interface CompanyTypes {
  name: string,
  description: string,
  contactEmail: string,
  contactPhone: string
}

export interface ApiTypes {
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  company: CompanyTypes;
  id: string;
}