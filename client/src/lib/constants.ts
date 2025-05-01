// Define service data
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const services: Service[] = [
  {
    id: "it-infrastructure",
    title: "IT Infrastructure",
    description: "Robust IT infrastructure solutions including server management, networking, and system integration.",
    icon: "server",
    color: "bg-primary-dark"
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Seamless cloud migration, management, and optimization services for enhanced scalability and efficiency.",
    icon: "cloud",
    color: "bg-primary"
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description: "Strategic IT consulting to align technology investments with your business objectives and growth plans.",
    icon: "comments",
    color: "bg-secondary"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your data, systems, and networks from evolving threats.",
    icon: "shield-check",
    color: "bg-gray-dark"
  }
];

// Define team members
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Robert Chen",
    role: "CEO & Founder",
    description: "15+ years of experience in IT leadership and strategic planning.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    role: "CTO",
    description: "Cloud architecture specialist with expertise in AWS and Azure.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Security Specialist",
    description: "Certified cybersecurity expert with a focus on threat prevention.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 4,
    name: "Samantha Lee",
    role: "Solutions Architect",
    description: "Specialized in designing scalable enterprise IT solutions.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  }
];

// Testimonials
export interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "TechCore Solutions transformed our IT infrastructure, resulting in a 30% increase in operational efficiency. Their team's expertise and dedication were exceptional throughout the process.",
    author: "Michael Johnson",
    position: "CTO",
    company: "Global Enterprises",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    content: "The cloud migration services provided by TechCore were seamless and exceeded our expectations. We've seen significant cost savings and improved scalability since implementation.",
    author: "Sarah Williams",
    position: "Operations Director",
    company: "Tech Innovators",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    content: "TechCore's cybersecurity solutions have provided us with peace of mind and protected our sensitive data from multiple threat attempts. Their proactive approach to security is invaluable.",
    author: "David Thompson",
    position: "CEO",
    company: "Financial Services Inc.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  }
];

export const companyInformation = {
  name: "Cornerstone IT Solutions",
  founded: 2022,
  slogan: "Building Your Digital Foundation",
  description: "Cornerstone IT Solutions Private Limited is a private company incorporated on 07 December 2022. We specialize in a range of computer-related activities including website maintenance, multimedia presentations creation, and comprehensive IT solutions for businesses of all sizes.",
  registrationInfo: "Registered at Registrar of Companies, ROC Hyderabad with an authorized share capital of Rs. 100,000 and paid up capital of Rs. 100,000.",
  address: {
    street: "Hyderabad Corporate Office",
    city: "Hyderabad",
    state: "Telangana",
    zip: "500001"
  },
  contact: {
    phone: "+91 40 1234 5678",
    email: "info@cornerstoneitsolutions.com"
  },
  social: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#"
  }
};
