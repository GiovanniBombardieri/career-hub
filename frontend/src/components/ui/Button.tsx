import type {ButtonHTMLAttributes} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: Props) {
    return (
        <button
            {...props}
            style={{
                padding: "8px 16px",
                cursor: "pointer",
            }}
        />
    );
}