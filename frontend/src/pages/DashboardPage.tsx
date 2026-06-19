import { useCompanies } from "../features/companies/hooks/useCompanies.ts";
import { CompaniesTable } from "../features/companies/components/CompaniesTable";

export default function DashboardPage() {
    const { companies, loading, error } = useCompanies();

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h1>Companies</h1>

            <CompaniesTable companies={companies} />
        </div>
    );
}