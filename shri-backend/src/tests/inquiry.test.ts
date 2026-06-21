import { inquirySchema } from "../schemas/inquirySchema.js";

describe("Inquiry Schema Validation", () => {
  it("should validate a correct inquiry", () => {
    const validData = {
      body: {
        name: "John Doe",
        email: "john@example.com",
        interest: "Architecture",
        message: "Hello SHRI team"
      }
    };
    expect(() => inquirySchema.parse(validData)).not.toThrow();
  });

  it("should throw an error for an invalid email", () => {
    const invalidData = {
      body: {
        name: "John Doe",
        email: "not-an-email",
        interest: "Architecture"
      }
    };
    expect(() => inquirySchema.parse(invalidData)).toThrow();
  });
});
