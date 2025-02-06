import { forwardRef } from 'react';
import clsx from 'clsx';

// Interface extending HTML input props with additional custom properties
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Optional error message to display
  error?: string;
  // Optional label text
  label?: string;
}

// Reusable input component with forwarded ref
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, ...props }, ref) => {
    return (
      // Container div for input field and associated elements
      <div className="w-full">
        {/* Render label if provided */}
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        {/* Input field with dynamic styling based on state */}
        <input
          className={clsx(
            // Base styles
            'block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
            // Error state styling
            error && 'border-red-500',
            // Additional custom classes
            className
          )}
          ref={ref}
          {...props}
        />
        {/* Error message display */}
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

// Set display name for React DevTools
Input.displayName = 'Input'; 