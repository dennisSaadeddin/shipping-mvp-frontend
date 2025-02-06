'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AddressForm } from '@/components/address-form';
import { ItemForm } from '@/components/item-form';
import { shipmentSchema } from '@/schemas/shipping';
import { shipmentApi } from '@/lib/api-client';
import type { Shipment } from '@/types/shipping';

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Shipment>({
    resolver: zodResolver(shipmentSchema),
    defaultValues: {
      items: [{ piece_count: 1 }],
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: shipmentApi.createShipment,
    onSuccess: () => {
      alert('Shipment created successfully!');
      reset();
    },
    onError: (error) => {
      alert('Error creating shipment: ' + error.message);
    },
  });

  const onSubmit = (data: Shipment) => {
    mutate(data);
  };

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create Shipment</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <AddressForm register={register} errors={errors} type="from" />
          <AddressForm register={register} errors={errors} type="to" />
          <ItemForm register={register} errors={errors} />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isPending}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isPending ? 'Creating...' : 'Create Shipment'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
