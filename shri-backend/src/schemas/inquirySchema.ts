import { z } from "zod";

export const inquirySchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    interest: z.string().min(1, "Interest category is required"),
    message: z.string().max(1000).optional(),
  }),
});
