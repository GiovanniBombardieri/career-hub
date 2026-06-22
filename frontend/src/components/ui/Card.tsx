import type {ReactNode} from "react";

type Pros = {
    children: ReactNode;
};

export function Card({ children }: Pros ) {
    return (
        <div
            style={{
                background:"var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "16px",
            }}
        >
            {children}
        </div>
    );
}