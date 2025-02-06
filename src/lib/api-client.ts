import axios from 'axios';
import type { Shipment } from '../types/shipping';

// Get the API URL from environment variables or use local development URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Create an axios instance with default configuration
export const apiClient = axios.create({
  // Set the base URL for all requests
  baseURL: API_BASE_URL,
  // Set default headers
  headers: {
    'Content-Type': 'application/json',
  },
  // Set timeout for requests (10 seconds)
  timeout: 10000,
});

// Define API endpoints and their corresponding functions
export const shipmentApi = {
  // Create a new shipment
  // @param shipment: The shipment data to be sent to the server
  // @returns: Promise with the server response
  createShipment: async (shipment: Shipment) => {
    try {
      const response = await apiClient.post('/api/shipments', shipment);
      return response.data;
    } catch (error) {
      // Enhance error handling with more descriptive messages
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.detail || 'Failed to create shipment');
      }
      throw error;
    }
  },
}; 