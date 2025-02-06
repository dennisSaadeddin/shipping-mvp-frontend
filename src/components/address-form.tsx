import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Input } from './ui/input';
import type { Shipment, Address } from '@/types/shipping';

// Props interface for the AddressForm component
interface AddressFormProps {
  // Form register function from react-hook-form
  register: UseFormRegister<Shipment>;
  // Form errors object from react-hook-form
  errors: FieldErrors<Shipment>;
  // Type of address ('from' or 'to')
  type: 'from' | 'to';
}

export function AddressForm({ register, errors, type }: AddressFormProps) {
  // Create the field prefix based on address type
  const prefix = `${type}_address` as const;
  // Extract error object for this address type
  const errorObj = (errors[`${type}_address`] as FieldErrors<Address>) || {};

  return (
    // Container for the address form section
    <div className="space-y-4">
      {/* Section title */}
      <h3 className="text-lg font-medium">{type === 'from' ? 'From' : 'To'} Address</h3>
      {/* Grid layout for form fields */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name input field */}
        <Input
          label="Name"
          {...register(`${prefix}.name` as const)}
          error={errorObj.name?.message}
        />
        {/* Street address input field */}
        <Input
          label="Street"
          {...register(`${prefix}.street1` as const)}
          error={errorObj.street1?.message}
        />
        {/* City input field */}
        <Input
          label="City"
          {...register(`${prefix}.city` as const)}
          error={errorObj.city?.message}
        />
        {/* State input field */}
        <Input
          label="State"
          {...register(`${prefix}.state` as const)}
          error={errorObj.state?.message}
        />
        {/* ZIP code input field */}
        <Input
          label="ZIP Code"
          {...register(`${prefix}.zip` as const)}
          error={errorObj.zip?.message}
        />
        {/* Country input field */}
        <Input
          label="Country"
          {...register(`${prefix}.country` as const)}
          error={errorObj.country?.message}
        />
        {/* Phone number input field */}
        <Input
          label="Phone"
          type="tel"
          {...register(`${prefix}.phone` as const)}
          error={errorObj.phone?.message}
        />
        {/* Email input field */}
        <Input
          label="Email"
          type="email"
          {...register(`${prefix}.email` as const)}
          error={errorObj.email?.message}
        />
      </div>
    </div>
  );
} 