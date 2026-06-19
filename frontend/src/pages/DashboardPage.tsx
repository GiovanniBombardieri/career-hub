import { useCompanies } from "../features/companies/hooks/useCompanies.ts";
import { CompaniesTable } from "../features/companies/components/CompaniesTable";
import {AppLayout} from "../components/layout/AppLayout";

export default function DashboardPage() {
    const { companies, loading, error } = useCompanies();

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <AppLayout>
            <h1>Companies</h1>

            <CompaniesTable companies={companies} />
        </AppLayout>
    );
}