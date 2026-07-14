export interface Vehicle {
  listing_id: number;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  transmission: 'manual' | 'automatic' | 'triptronic';
  fuel_type: 'petrol' | 'diesel' | 'hybrid' | 'electric';
  body_type?: string;
  engine_capacity?: number;
}
