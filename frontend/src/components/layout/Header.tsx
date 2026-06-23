import {useTheme} from "../../hooks/useTheme";
import {useNavigate} from "react-router-dom";
import {removeToken} from "../../utils/auth.ts";

export function Header() {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleLogout = async() => {
        try {
            removeToken();
            navigate("/login");
        } catch (e) {
            console.error(e);
        }
    };

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

            <div
                style={{
                    width: "8%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <button
                    onClick={handleLogout}
                    style={{
                        border: "1px solid var(--border)",
                        background: "var(--surface)",
                        color: "var(--text)",
                        borderRadius: "8px",
                        padding: "8px 12px",
                        cursor: "pointer",
                    }}
                >
                    Logout
                </button>

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
            </div>
        </header>
    );
}