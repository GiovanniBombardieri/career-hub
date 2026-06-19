import { useCompanies } from "../features/companies/hooks/useCompanies.ts";

export default function DashboardPage() {
    const { companies, loading, error } = useCompanies();

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h1>Companies</h1>

            {companies.map(company => (
                <div key={company.id}>
                    {company.name}
                </div>
            ))}
        </div>
    );
}