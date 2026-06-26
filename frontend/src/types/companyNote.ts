export interface CompanyNote {
    id: number;
    company_id: number;
    content: string;
    created_at: string;
    updated_at: string;
}

export interface CreateCompanyNotePayload {
    content: string;
}