export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  roleSubtitle: string;
  tagline: string;
  location: string;
  bio: string[];
  email: string;
  phone?: string;
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  cvUrl?: string;
  portraitUrl?: string;
}

export interface CricketProfile {
  headline: string;
  subheading: string;
  role: string; // e.g. "Top-Order Batter & Tactical Strategist"
  battingStyle: string;
  bowlingStyle: string;
  keyMindsets: {
    title: string;
    description: string;
    cricketAspect: string;
    techSynergy: string;
  }[];
  timeline: {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    type: 'competition' | 'leadership' | 'milestone';
  }[];
  actionPhotoUrl?: string;
  gallery?: {
    url: string;
    title?: string;
    caption?: string;
  }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    proficiency?: string;
    highlight?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  technologies: string[];
  role: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  imageUrl: string;
  keyFeatures: string[];
  challenges: string;
  outcome: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  organization: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  university: string;
  year: string;
  status: string;
  skills: string[];
  achievements: string[];
}

export interface MilestoneItem {
  number: string;
  category: 'CRICKET' | 'TECHNOLOGY' | 'ACADEMICS' | 'LEADERSHIP';
  title: string;
  subtitle: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  cricket: CricketProfile;
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  milestones: MilestoneItem[];
  philosophy: {
    quote: string;
    author: string;
    subtext: string;
  };
}
