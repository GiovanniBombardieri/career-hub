import type { Company } from "../../../types/company";
import { StatusBadge } from "./StatusBadge";

type Props = {
    company: Company;
};

export function CompanyRow({ company }: Props) {
    return (
        <tr>
            <td>{company.name}</td>

            <td>
                <StatusBadge status={company.status}/>
            </td>

            <td>{company.remote_policy}</td>

            <td>{company.company_size}</td>

            <td>
                {[company.city, company.region]
                    .filter(Boolean)
                    .join(", ")}
            </td>
        </tr>
    );
}