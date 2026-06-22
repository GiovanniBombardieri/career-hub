import type { Company } from "../../../types/company";
import { CompanyRow } from "./CompanyRow";

type Props = {
    companies: Company[];
}

export function CompaniesTable({ companies }: Props) {
    if (companies.length === 0) {
        return (
            <div style={{padding: "16px"}}>
                <h3>No companies yet</h3>
                <p>Start by adding your first company to build your pipeline.</p>
            </div>
        );
    }

    return (
        <div style={{ overflowX: "auto" }}>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "14px",
                }}
            >
                <thead>
                <tr style={{ textAlign: "left", borderBottom: "1px solid #e5e5e5" }}>
                    <th style={{ padding: "12px" }}>Name</th>
                    <th style={{ padding: "12px" }}>Status</th>
                    <th style={{ padding: "12px" }}>Remote</th>
                    <th style={{ padding: "12px" }}>Size</th>
                    <th style={{ padding: "12px" }}>Location</th>
                    <th style={{ padding: "12px" }}>Actions</th>
                </tr>
                </thead>

                <tbody>
                {companies.map(company => (
                    <CompanyRow
                        key={company.id}
                        company={company}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}