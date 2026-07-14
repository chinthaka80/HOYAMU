export interface User {
  id: number;
  uuid: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone?: string;
  district?: string;
  avatar?: string | null;
  status: 'active' | 'suspended';
  email_verified_at?: string | null;
  last_login_at?: string | null;
  created_at: string;
  updated_at: string;
}
