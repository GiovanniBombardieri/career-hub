import type { Company } from "../../../types/company";

type Props = {
    status: Company["status"];
}

export function StatusBadge({ status }: Props) {
    return (
        <span>
            {status}
        </span>
    );
}