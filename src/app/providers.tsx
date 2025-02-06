'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

// Function to create a new QueryClient instance with default configuration
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Cache time for queries (5 minutes)
        staleTime: 5 * 60 * 1000,
        // Number of retry attempts for failed queries
        retry: 1,
      },
    },
  });
}

// Store the QueryClient instance for browser environment
let browserQueryClient: QueryClient | undefined = undefined;

// Function to get or create a QueryClient instance
function getQueryClient() {
  // For server-side rendering, always create a new client
  if (typeof window === 'undefined') {
    return makeQueryClient();
  }
  // For client-side, reuse existing client or create new one
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

// Provider component to wrap the application with React Query
export function Providers({ children }: { children: ReactNode }) {
  // Initialize QueryClient using useState to ensure consistent hydration
  const [queryClient] = useState(getQueryClient);

  return (
    // Provide QueryClient instance to all child components
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
} 