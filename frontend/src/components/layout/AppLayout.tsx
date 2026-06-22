import type {ReactNode} from "react";
import {Header} from "./Header";
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

type Props = {
    children?: ReactNode;
};

export function AppLayout({ children }: Props) {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <aside
                style={{
                    width: "240px",
                    borderRight: "1px solid #e5e5e5",
                    padding: "16px",
                }}
            >
                <div style={{ fontWeight: 600, marginBottom: "24px" }}>
                    CareerHUB
                </div>
                <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <Link to="/">Companies</Link>
                    <Link to="/companies/create">Create Company</Link>
                </nav>
            </aside>

            {/* Main area */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />

                <main style={{ padding: "24px" }}>
                    {children ?? <Outlet />}
                </main>
            </div>
        </div>
    );
}
