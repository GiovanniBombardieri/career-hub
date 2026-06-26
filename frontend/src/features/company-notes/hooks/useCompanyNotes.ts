import { useEffect, useState } from "react";
import { companyNotesService } from "../services/companyNotesService";
import type { CompanyNote } from "../../../types/companyNote";

export function useCompanyNotes(companyId: number) {
    const [notes, setNotes] = useState<CompanyNote[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCompanyNotes = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await companyNotesService.getAll(companyId);

            setNotes(response);
        } catch (err: any) {
            setError(err.message ?? "Error fetching companies");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCompanyNotes();
    }, []);

    return {
        notes,
        loading,
        error,
        refetch: fetchCompanyNotes,
    };
}