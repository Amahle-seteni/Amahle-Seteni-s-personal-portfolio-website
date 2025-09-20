export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  category: "Full Stack" | "Mobile" | "Frontend" | "Backend";
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
