// TYPESCRIPT INTERFACES
// =====================
// These interfaces define the "shape" of our data. 
// Using types helps catch errors (like missing a title) before the app runs.

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: { // '?' means this property is optional
    [key: string]: string;
  };
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  journal: string;
  status: 'Published' | 'Under Review' | 'Submitted'; // Union type: specific allowed strings
  year: string;
  links?: {
    pdf?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[]; // An array of bullet points
  type: 'Work' | 'Internship' | 'Leadership';
}

export interface SkillCategory {
  category: string;
  items: string[];
}
