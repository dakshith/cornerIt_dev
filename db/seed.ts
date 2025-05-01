import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("Seeding database...");
    
    // Check if services already exist before seeding
    const existingServices = await db.select().from(schema.services);
    if (existingServices.length === 0) {
      console.log("Seeding services...");
      await db.insert(schema.services).values([
        {
          slug: "it-infrastructure",
          title: "IT Infrastructure",
          description: "Robust IT infrastructure solutions including server management, networking, and system integration.",
          icon: "server",
          color: "bg-primary-dark"
        },
        {
          slug: "cloud-services",
          title: "Cloud Services",
          description: "Seamless cloud migration, management, and optimization services for enhanced scalability and efficiency.",
          icon: "cloud",
          color: "bg-primary"
        },
        {
          slug: "consulting",
          title: "IT Consulting",
          description: "Strategic IT consulting to align technology investments with your business objectives and growth plans.",
          icon: "comments",
          color: "bg-secondary"
        },
        {
          slug: "cybersecurity",
          title: "Cybersecurity",
          description: "Comprehensive security solutions to protect your data, systems, and networks from evolving threats.",
          icon: "shield-check",
          color: "bg-gray-dark"
        }
      ]);
    } else {
      console.log("Services already exist, skipping seeding.");
    }
    
    // Check if team members already exist before seeding
    const existingTeamMembers = await db.select().from(schema.teamMembers);
    if (existingTeamMembers.length === 0) {
      console.log("Seeding team members...");
      await db.insert(schema.teamMembers).values([
        {
          name: "Robert Chen",
          role: "CEO & Founder",
          description: "15+ years of experience in IT leadership and strategic planning.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          socialLinkedin: "#",
          socialTwitter: "#",
          socialEmail: "#"
        },
        {
          name: "Emily Rodriguez",
          role: "CTO",
          description: "Cloud architecture specialist with expertise in AWS and Azure.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          socialLinkedin: "#",
          socialTwitter: "#",
          socialEmail: "#"
        },
        {
          name: "Marcus Johnson",
          role: "Security Specialist",
          description: "Certified cybersecurity expert with a focus on threat prevention.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          socialLinkedin: "#",
          socialTwitter: "#",
          socialEmail: "#"
        },
        {
          name: "Samantha Lee",
          role: "Solutions Architect",
          description: "Specialized in designing scalable enterprise IT solutions.",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          socialLinkedin: "#",
          socialTwitter: "#",
          socialEmail: "#"
        }
      ]);
    } else {
      console.log("Team members already exist, skipping seeding.");
    }
    
    // Check if testimonials already exist before seeding
    const existingTestimonials = await db.select().from(schema.testimonials);
    if (existingTestimonials.length === 0) {
      console.log("Seeding testimonials...");
      await db.insert(schema.testimonials).values([
        {
          content: "TechCore Solutions transformed our IT infrastructure, resulting in a 30% increase in operational efficiency. Their team's expertise and dedication were exceptional throughout the process.",
          author: "Michael Johnson",
          position: "CTO",
          company: "Global Enterprises",
          rating: 5,
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        },
        {
          content: "The cloud migration services provided by TechCore were seamless and exceeded our expectations. We've seen significant cost savings and improved scalability since implementation.",
          author: "Sarah Williams",
          position: "Operations Director",
          company: "Tech Innovators",
          rating: 5,
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        },
        {
          content: "TechCore's cybersecurity solutions have provided us with peace of mind and protected our sensitive data from multiple threat attempts. Their proactive approach to security is invaluable.",
          author: "David Thompson",
          position: "CEO",
          company: "Financial Services Inc.",
          rating: 4,
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        }
      ]);
    } else {
      console.log("Testimonials already exist, skipping seeding.");
    }
    
    console.log("Database seeding completed.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
