import type {ReactNode} from "react";
import {Header} from "./Header";
import {Outlet} from "react-router-dom";
import {NavLink} from "react-router-dom";

type Props = {
    children?: ReactNode;
};

export function AppLayout({ children }: Props) {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <aside
                style={{
                    width: "240px",
                    borderRight: "1px solid var(--border)",
                    padding: "16px",
                }}
            >
                <div style={{ fontWeight: 600, marginBottom: "24px" }}>
                    CareerHUB
                </div>
                <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <NavLink
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                         to="/">Companies
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        to="/companies/create">Create Company
                    </NavLink>
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
