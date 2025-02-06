// Define the structure for shipping addresses (both sender and recipient)
export interface Address {
  // Full name of the person or company
  name: string;
  // Primary street address
  street1: string;
  // City name
  city: string;
  // State or province
  state: string;
  // ZIP/Postal code (6 digits)
  zip: string;
  // Country name
  country: string;
  // Contact phone number
  phone: string;
  // Contact email address
  email: string;
}

// Define the structure for package/shipment items
export interface ShipmentItem {
  // Number of pieces (fixed to 1 for MVP)
  piece_count: number;
  // Weight of the package in pounds
  package_weight: number;
  // Total weight in pounds
  weight: number;
  // Package length in inches (up to 2 decimals)
  length: number;
  // Package width in inches (up to 2 decimals)
  width: number;
  // Package height in inches (up to 2 decimals)
  height: number;
  // Package contents description
  description: string;
}

// Main shipment interface combining addresses and items
export interface Shipment {
  // Recipient's address details
  to_address: Address;
  // Sender's address details
  from_address: Address;
  // Array of items to be shipped (currently limited to 1)
  items: ShipmentItem[];
} 