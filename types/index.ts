export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  techStack: string[];
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export type ProjectType =
  | "SaaS Development"
  | "iOS App"
  | "Custom Software"
  | "Partnership";

export type BudgetRange =
  | "< €10,000"
  | "€10,000 - €25,000"
  | "€25,000 - €50,000"
  | "€50,000 - €100,000"
  | "> €100,000";
