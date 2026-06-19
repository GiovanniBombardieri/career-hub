export interface Company {
    id: number;
    name: string;
    website: string | null
    linkedin_url: string | null;
    country: string;
    region: string | null;
    city: string | null;
    remote_policy: string;
    company_size: string;
    status: string;
    score: number | null;
    why_interested: string | null;
    created_at: string;
    updated_at: string;
}