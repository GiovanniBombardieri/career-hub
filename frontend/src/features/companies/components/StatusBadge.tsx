import type { Company } from "../../../types/company";

type Props = {
    status: Company["status"];
}

const statusStyles: Record<string, React.CSSProperties> = {
    prospect: {
        backgroundColor: "#e5e7eb",
        color: "#374151",
    },
    watching: {
        backgroundColor: "#dbeafe",
        color: "#1e3a8a",
    },
    interested: {
        backgroundColor: "#ede9fe",
        color: "#5b21b6",
    },
    applied: {
        backgroundColor: "#bfdbfe",
        color: "#1d4ed8",
    },
    interviewing: {
        backgroundColor: "#fed7aa",
        color: "#9a3412",
    },
    employee: {
        backgroundColor: "#bbf7d0",
        color: "#065f46",
    },
    rejected: {
        backgroundColor: "#fecaca",
        color: "#991b1b",
    },
    archived: {
        backgroundColor: "#e5e7eb",
        color: "#6b7280",
    },
};

export function StatusBadge({ status }: Props) {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "4x 10px",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "capitalize",
                ...statusStyles[status],
            }}
        >
            {status}
        </span>
    );
}