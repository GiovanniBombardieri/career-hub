import { useCompanies } from "../features/companies/hooks/useCompanies.ts";
import { CompaniesTable } from "../features/companies/components/CompaniesTable";
import {PageHeader} from "../components/layout/PageHeader";
import {Button} from "../components/ui/Button";
import {useNavigate} from "react-router-dom";
import {Card} from "../components/ui/Card.tsx";

export default function DashboardPage() {
    const { companies, loading, error } = useCompanies();
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <PageHeader
                title="Companies"
                actions={
                    <Button onClick={() => navigate("/companies/create")}>
                        + Add Company
                    </Button>
                }
            />

            <Card>
                <CompaniesTable companies={companies} />
            </Card>
        </>
    );
}