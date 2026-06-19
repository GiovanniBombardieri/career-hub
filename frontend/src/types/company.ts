export interface Company {
    id: number;
    user_id: number;

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

export interface CreateCompanyPayload {
    name: string;
    website?: string;
    linkedin_url?: string;
    country: string;
    region?: string;
    city?: string;
    remote_policy: string;
    company_size: string;
    status: string;
    score?: number | null;
    why_interested?: string;
}