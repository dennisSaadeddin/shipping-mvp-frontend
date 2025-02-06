import { z } from 'zod';

// Regular expressions for input validation
// Phone number format: XXX-XXX-XXXX or (XXX) XXX-XXXX
const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/;
// ZIP code format: exactly 6 digits
const zipRegex = /^\d{6}$/;
// Email format validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Validation schema for address fields
export const addressSchema = z.object({
  // Name field: required, non-empty string
  name: z.string().min(1, 'Name is required'),
  // Street address: required, non-empty string
  street1: z.string().min(1, 'Street address is required'),
  // City: required, non-empty string
  city: z.string().min(1, 'City is required'),
  // State: required, non-empty string
  state: z.string().min(1, 'State is required'),
  // ZIP code: must match 6-digit format
  zip: z.string().regex(zipRegex, 'ZIP code must be 6 digits'),
  // Country: required, non-empty string
  country: z.string().min(1, 'Country is required'),
  // Phone: must match specified format
  phone: z.string().regex(phoneRegex, 'Invalid phone number format'),
  // Email: must match valid email format
  email: z.string().regex(emailRegex, 'Invalid email format'),
});

// Validation schema for shipment items
export const shipmentItemSchema = z.object({
  // Piece count: must be exactly 1
  piece_count: z.number().min(1).max(1, 'Piece count must be 1'),
  // Package weight: must be positive number
  package_weight: z.number().positive('Package weight must be positive'),
  // Weight: must be positive number
  weight: z.number().positive('Weight must be positive'),
  // Length: positive number with up to 2 decimal places
  length: z.number().positive('Length must be positive').multipleOf(0.01),
  // Width: positive number with up to 2 decimal places
  width: z.number().positive('Width must be positive').multipleOf(0.01),
  // Height: positive number with up to 2 decimal places
  height: z.number().positive('Height must be positive').multipleOf(0.01),
  // Description: required, non-empty string
  description: z.string().min(1, 'Description is required'),
});

// Complete shipment validation schema
export const shipmentSchema = z.object({
  // Recipient address validation
  to_address: addressSchema,
  // Sender address validation
  from_address: addressSchema,
  // Array of items (minimum 1 required)
  items: z.array(shipmentItemSchema).min(1, 'At least one item is required'),
}); 