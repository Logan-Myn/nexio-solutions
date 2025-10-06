import { ContactFormData } from "@/types";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateContactForm = (
  data: ContactFormData
): { isValid: boolean; errors: Partial<Record<keyof ContactFormData, string>> } => {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.projectType) {
    errors.projectType = "Please select a project type";
  }

  if (!data.budget) {
    errors.budget = "Please select a budget range";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
