import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Input } from './ui/input';
import type { Shipment } from '@/types/shipping';

interface ItemFormProps {
  register: UseFormRegister<Shipment>;
  errors: FieldErrors<Shipment>;
}

export function ItemForm({ register, errors }: ItemFormProps) {
  const errorObj = (errors.items?.[0] || {}) as Record<string, { message?: string }>;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Package Details</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Piece Count"
          type="number"
          defaultValue={1}
          disabled
          {...register('items.0.piece_count', { valueAsNumber: true })}
          error={errorObj.piece_count?.message}
        />
        <Input
          label="Package Weight (lbs)"
          type="number"
          step="0.01"
          {...register('items.0.package_weight', { valueAsNumber: true })}
          error={errorObj.package_weight?.message}
        />
        <Input
          label="Weight (lbs)"
          type="number"
          step="0.01"
          {...register('items.0.weight', { valueAsNumber: true })}
          error={errorObj.weight?.message}
        />
        <Input
          label="Length (inches)"
          type="number"
          step="0.01"
          {...register('items.0.length', { valueAsNumber: true })}
          error={errorObj.length?.message}
        />
        <Input
          label="Width (inches)"
          type="number"
          step="0.01"
          {...register('items.0.width', { valueAsNumber: true })}
          error={errorObj.width?.message}
        />
        <Input
          label="Height (inches)"
          type="number"
          step="0.01"
          {...register('items.0.height', { valueAsNumber: true })}
          error={errorObj.height?.message}
        />
        <Input
          label="Description"
          className="sm:col-span-2"
          {...register('items.0.description')}
          error={errorObj.description?.message}
        />
      </div>
    </div>
  );
} 