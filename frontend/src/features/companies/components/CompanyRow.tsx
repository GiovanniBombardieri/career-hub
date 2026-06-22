import type { Company } from "../../../types/company";
import { StatusBadge } from "./StatusBadge";

type Props = {
    company: Company;
};

export function CompanyRow({ company }: Props) {
    return (
        <tr
            style={{
                borderBottom: "1px solid #f0f0f0",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLTableRowElement).style.background = "#fafafa";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLTableRowElement).style.background = "transparent";
            }}
        >
            <td style={{ padding: "12px" }}>
                <div style={{ fontWeight: 600 }}>
                    {company.name}
                </div>
            </td>

            <td style={{ padding: "12px"}}>
                <StatusBadge status={company.status}/>
            </td>

            <td style={{ padding: "12px" }}>
                {company.remote_policy}
            </td>

            <td style={{ padding: "12px" }}>
                {company.company_size}
            </td>

            <td style={{ padding: "12px" }}>
                {[company.city, company.region]
                    .filter(Boolean)
                    .join(", ")}
            </td>

            <td>
                <button onClick={() => {
                    // futuro: navigate('companies/${companies.id}')
                }}>
                    View
                </button>
            </td>
        </tr>
    );
}