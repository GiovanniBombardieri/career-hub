import type {ButtonHTMLAttributes} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: Props) {
    return (
        <button
            {...props}
            style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #ddd",
                background: "#111",
                color: "white",
                cursor: "pointer",
            }}
        />
    );
}