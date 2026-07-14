export interface Job {
  listing_id: number;
  company_name: string;
  job_type: 'full-time' | 'part-time' | 'contract' | 'remote' | 'internship';
  experience_level?: string;
  application_deadline?: string;
  requirements?: string[];
  salary_range?: string;
}
