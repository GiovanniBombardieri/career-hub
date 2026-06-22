import type {ReactNode} from "react";

type Pros = {
    children: ReactNode;
};

export function Card({ children }: Pros ) {
    return (
        <div
            style={{
                background:"white",
                border: "1px solid #e5e5e5",
                borderRadius: "8px",
                padding: "16px",
            }}
        >
            {children}
        </div>
    );
}