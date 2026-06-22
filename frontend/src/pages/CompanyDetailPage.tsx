import { useParams } from "react-router-dom";
import { useCompany } from "../features/companies/hooks/useCompanies.ts";

export default function CompanyDetailPage() {
    const { id } = useParams();
    const { company, loading, error } = useCompany(Number(id));

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!company) return <p>Not found</p>
    const location = [company.city, company.region, company.country]
        .filter(Boolean)
        .join(", ");

    return (
        <div>
            {/* HEADER */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "24px",
                }}
            >
                <div>
                    <h1 style={{ margin: 0 }}>
                        {company.name}
                    </h1>

                    <p style={{ margin: "6px 0 0", color: "var(--text)" }}>
                        {location}
                    </p>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                    <span
                        style={{
                            padding: "4px 10px",
                            borderRadius: "999px",
                            background: "var(--hover)",
                            fontSize: "12px",
                        }}
                    >
                        {company.status}
                    </span>

                    <button>
                        Edit
                    </button>
                </div>
            </div>


            {/* BODY GRID */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                }}
            >
                {/* LEFT */}
                <div
                    style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        padding: "16px",
                    }}
                >
                    <h3>Company Info</h3>

                    <p><b>Remote:</b> {company.remote_policy}</p>
                    <p><b>Size:</b> {company.company_size}</p>
                    <p><b>Country:</b> {company.country}</p>

                    <div
                        style={{
                            marginTop: "16px",
                            background: "var(--surface)",
                            border: "1px solid var(--border)",
                            borderRadius: "8px",
                            padding: "16px",
                        }}
                    >
                        <h3 style={{ marginTop: 0 }}>Notes</h3>

                        <textarea
                            placeholder="Write a note..."
                            style={{
                                width: "95%",
                                minHeight: "100px",
                                padding: "10px",
                                borderRadius: "8px",
                                border: "1px solid var(--border)",
                                background: "var(--bg)",
                                color: "var(--text)",
                                resize: "vertical",
                            }}
                        />

                        <button style={{ margin: "8px" }}>
                            Save note
                        </button>

                        <div style={{ marginTop: "12px" }}>
                            <p style={{ fontSize: "12px", opacity: 0.7 }}>
                                No notes yet
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div
                    style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        padding: "16px",
                    }}>
                    <h3>Links</h3>

                    <p>
                        <a href={company.website ?? "#"} target={"_blank"}>
                            Website
                        </a>
                    </p>

                    <p>
                        <a href={company.linkedin_url ?? "#"} target={"_blank"}>
                            LinkedIn
                        </a>
                    </p>

                    <div>
                        <h3 style={{ marginTop: 0 }}>Contacts</h3>

                        <div style={{ fontSize: "13px", opacity: 0.7 }}>
                            No contact yet
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: "16px",
                            background: "var(--surface)",
                            border: "1px solid var(--border)",
                            borderRadius: "8px",
                            padding: "16px",
                        }}
                    >
                        <h3 style={{ marginTop: 0 }}>Activity</h3>
                        <ul style={{ paddingLeft: "16px", fontSize: "13px" }}>
                            <li>Company created</li>
                            <li>Status: {company.status}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}