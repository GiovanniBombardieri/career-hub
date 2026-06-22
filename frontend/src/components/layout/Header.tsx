import {useTheme} from "../../hooks/useTheme";

export function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header
            style={{
                borderBottom: '1px solid var(--border)',
                padding: "12px 24px",
                background: "var(--surface)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h2 style={{ margin: 0, fontSize: "16px", color: "var(--text)" }}>
                Dashboard
            </h2>

            <button
                onClick={toggleTheme}
                style={{
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    color: "var(--text)",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    cursor: "pointer",
                }}
            >
                {theme === "dark" ? "☀️" : "🌙"}
            </button>
        </header>
    );
}