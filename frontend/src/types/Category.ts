export interface Category {
  id: number;
  parent_id?: number;
  name: string;
  slug: string;
  icon?: string;
  order: number;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}
