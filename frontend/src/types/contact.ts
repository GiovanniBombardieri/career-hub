export type Contact = {
    id: number;

    full_name: string;
    email: string | null;
    linkedin_url: string | null;

    relationship_status: string;
    notes: string | null;

    role: {
        id: number;
        name: string;
    };

    created_at: string;
    updated_at: string;
}