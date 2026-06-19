import { useCompanies } from "../features/companies/hooks/useCompanies.ts";
import { CompaniesTable } from "../features/companies/components/CompaniesTable";
import {AppLayout} from "../components/layout/AppLayout";
import {PageHeader} from "../components/layout/PageHeader";
import {Button} from "../components/ui/Button";

export default function DashboardPage() {
    const { companies, loading, error } = useCompanies();

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <AppLayout>
            <PageHeader
                title="Companies"
                actions={
                    <Button>
                        + Add Company
                    </Button>
                }
            />

            <CompaniesTable companies={companies} />
        </AppLayout>
    );
}