import {useState} from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--bg)",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "420px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "32px",
                }}
            >
                <div style={{ marginBottom: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1
                        style={{
                            margin: 0,
                            fontSize: "28px",
                        }}
                    >
                        CareerHUB
                    </h1>

                    <p
                        style={{
                            marginTop: "8px",
                            color: "var(--text-h)",
                        }}
                    >
                        Track your job opportunities.
                    </p>
                </div>

                <input
                    className="inputStyle"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="inputStyle"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        marginTop: "10px",
                    }}
                >
                    Login
                </button>
            </div>
        </div>
    );
}