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
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Remote</th>
                <th>Size</th>
                <th>Location</th>
                <th>Actions</th>
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
    );
}