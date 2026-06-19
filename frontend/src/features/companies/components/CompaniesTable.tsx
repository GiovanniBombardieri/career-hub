import type { Company } from "../../../types/company";
import { CompanyRow } from "./CompanyRow";

type Props = {
    companies: Company[];
}

export function CompaniesTable({ companies }: Props) {
    if (companies.length === 0) {
        return (
            <p>No companies found.</p>
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