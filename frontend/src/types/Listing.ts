export interface Listing {
  id: number;
  uuid: string;
  user_id: number;
  category_id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  status: 'active' | 'pending' | 'sold' | 'expired';
  views: number;
  created_at: string;
  updated_at: string;
}
