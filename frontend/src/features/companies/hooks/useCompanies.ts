import { useEffect, useState } from "react";
import { companyService } from "../services/companyService";
import type { Company } from "../../../types/company";

export function useCompanies() {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCompanies = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await companyService.getAll();

            setCompanies(response.data);
        } catch (err: any) {
            setError(err.message ?? "Error fetching companies");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    return {
        companies,
        loading,
        error,
        refetch: fetchCompanies,
    };
}

export function useCompany(id: number) {
    const [company, setCompany] = useState<Company | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await companyService.getById(id);

                setCompany(response.data);
            } catch (err: any) {
                setError(err.message ?? "Error fetching company");
            } finally {
                setLoading(false);
            }
        };

        fetchCompany();
    }, [id]);

    return { company, loading, error };
}