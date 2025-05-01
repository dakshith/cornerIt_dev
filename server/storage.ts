import { db } from "@db";
import { eq } from "drizzle-orm";
import * as schema from "@shared/schema";

export const storage = {
  // Contact Message Operations
  createContactMessage: async (data: schema.InsertContactMessage) => {
    const [newMessage] = await db.insert(schema.contactMessages)
      .values(data)
      .returning();
    return newMessage;
  },

  getContactMessageById: async (id: number) => {
    return await db.query.contactMessages.findFirst({
      where: eq(schema.contactMessages.id, id)
    });
  },

  getAllContactMessages: async () => {
    return await db.select().from(schema.contactMessages);
  },

  markContactMessageAsRead: async (id: number) => {
    const [updatedMessage] = await db
      .update(schema.contactMessages)
      .set({ isRead: true })
      .where(eq(schema.contactMessages.id, id))
      .returning();
    return updatedMessage;
  },

  // Service Operations
  getAllServices: async () => {
    return await db.select().from(schema.services);
  },

  getServiceBySlug: async (slug: string) => {
    return await db.query.services.findFirst({
      where: eq(schema.services.slug, slug)
    });
  },

  // Testimonial Operations
  getAllTestimonials: async () => {
    return await db.select().from(schema.testimonials);
  },

  getTestimonialById: async (id: number) => {
    return await db.query.testimonials.findFirst({
      where: eq(schema.testimonials.id, id)
    });
  },

  // Team Member Operations
  getAllTeamMembers: async () => {
    return await db.select().from(schema.teamMembers);
  },

  getTeamMemberById: async (id: number) => {
    return await db.query.teamMembers.findFirst({
      where: eq(schema.teamMembers.id, id)
    });
  }
};
