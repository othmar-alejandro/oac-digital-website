export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  services: string[];
  link: string;
}

export interface LocationItem {
  city: string;
  country: string;
  image?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  slug: string;
}

export interface TeamMemberType {
  name: string;
  position: string;
  image: string;
  bio?: string;
}

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export interface SectionWrapperProps extends SectionProps {
  bgColor: 'light' | 'dark';
  id?: string;
}