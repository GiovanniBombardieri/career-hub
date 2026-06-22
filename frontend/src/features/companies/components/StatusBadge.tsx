import type { Company } from "../../../types/company";

type Props = {
    status: Company["status"];
}

const statusStyles: Record<string, React.CSSProperties> = {
    prospect: {
        backgroundColor: "#e5e7eb",
    },
    applied: {
        backgroundColor: "#bfdbfe",
    },
    interviewing: {
        backgroundColor: "#fed7aa",
    },
    offer: {
        backgroundColor: "#bbf7d0",
    },
    rejected: {
        backgroundColor: "#fecaca",
    },
    archived: {
        backgroundColor: "#d1d5db",
    },
}

export function StatusBadge({ status }: Props) {
    return (
        <span
            style={{
                padding: "4x 8px",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: 500,
                ...statusStyles[status],
            }}
        >
            {status}
        </span>
    );
}