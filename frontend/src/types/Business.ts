export interface Business {
  id: number;
  uuid: string;
  user_id: number;
  name: string;
  slug: string;
  category: string;
  description?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  city?: string;
  district?: string;
  is_verified: boolean;
  rating: number;
  created_at: string;
  updated_at: string;
}
