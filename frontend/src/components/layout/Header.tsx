export function Header() {
    return (
        <header
            style={{
                borderBottom: '1px solid var(--border)',
                padding: "12px 24px",
                background: "var(--surface)",
            }}
        >
            <h2 style={{ margin: 0, fontSize: "16px", color: "var(--text)" }}>
                Dashboard
            </h2>
        </header>
    );
}