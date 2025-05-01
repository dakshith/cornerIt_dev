import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  const apiPrefix = "/api";

  // Contact form submission endpoint
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      // Validate the incoming data
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Save to database
      const newMessage = await storage.createContactMessage(contactData);
      
      res.status(201).json({
        message: "Your message has been received. We'll get back to you soon!",
        id: newMessage.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error saving contact message:", error);
      res.status(500).json({ message: "Failed to send your message. Please try again later." });
    }
  });

  // Services endpoint
  app.get(`${apiPrefix}/services`, async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });

  // Get a specific service by slug
  app.get(`${apiPrefix}/services/:slug`, async (req, res) => {
    try {
      const { slug } = req.params;
      const service = await storage.getServiceBySlug(slug);
      
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      
      res.json(service);
    } catch (error) {
      console.error("Error fetching service:", error);
      res.status(500).json({ message: "Failed to fetch service" });
    }
  });

  // Testimonials endpoint
  app.get(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Team members endpoint
  app.get(`${apiPrefix}/team`, async (req, res) => {
    try {
      const teamMembers = await storage.getAllTeamMembers();
      res.json(teamMembers);
    } catch (error) {
      console.error("Error fetching team members:", error);
      res.status(500).json({ message: "Failed to fetch team members" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
