import {useState} from "react";
import type {CreateCompanyPayload} from "../../../types/company.ts";

type Props = {
    onSubmit: (data: CreateCompanyPayload) => void;
};

export function CompanyForm({onSubmit}: Props) {
    const [form, setForm] = useState<CreateCompanyPayload>({
        name: "",
        country: "",
        remote_policy: "hybrid",
        company_size: "11-50",
        status: "prospect",
        website: "",
        linkedin_url: "",
        region: "",
        city: "",
        score: null,
        why_interested: "",
    });

    const handleSubmit = (
        e: React.FormEvent,
    ) => {
        e.preventDefault();
        onSubmit(form);
    };

    const update = ((key: keyof CreateCompanyPayload, value: any) =>
    setForm((prev) => ({ ...prev, [key]: value}))
    );

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: 720,
                background: "var(--surface)",
                padding: 24,
                borderRadius: 12,
                border: "1px solid var(--border)",
            }}
        >
            <h2 style={{ marginBottom: 20 }}>Create Company</h2>
            {/* GRID */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    paddingRight: 12,
                }}
            >

                {/* NAME */}
                <div style={{ gridColumn: "1 / -1" }}>
                    <label>Name *</label>
                    <input
                        className="input"
                        value={form.name}
                        onChange={(e) =>
                            update("name", e.target.value)
                        }
                    />
                </div>

                {/* LOCATION */}
                <div>
                    <label>Country *</label>
                    <input
                        className="input"
                        value={form.country}
                        onChange={(e) =>
                            update("country", e.target.value)
                        }
                    />
                </div>

                <div>
                    <label>Region</label>
                    <input
                        className="input"
                        value={form.region ?? ""}
                        onChange={(e) =>
                            update("region", e.target.value || null)
                        }
                    />
                </div>

                <div>
                    <label>City</label>
                    <input
                        className="input"
                        value={form.city ?? ""}
                        onChange={(e) =>
                            update("city", e.target.value || null)
                        }
                    />
                </div>

                {/* STATUS */}
                <div>
                    <label>Status *</label>
                    <select
                        className="input"
                        value={form.status}
                        onChange={(e) =>
                            update("status", e.target.value)
                        }
                    >
                        <option value="prospect">Prospect</option>
                        <option value="watching">Watching</option>
                        <option value="interested">Interested</option>
                        <option value="applied">Applied</option>
                        <option value="interviewing">Interviewing</option>
                        <option value="employee">Employee</option>
                        <option value="rejected">Rejected</option>
                        <option value="archived">Archived</option>
                    </select>
                </div>

                {/* COMPANY INFO */}
                <div>
                    <label>Company Size *</label>
                    <select
                        className="input"
                        value={form.company_size}
                        onChange={(e) =>
                            update("company_size", e.target.value)
                        }
                    >
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">500+</option>
                    </select>
                </div>

                <div>
                    <label>Remote Policy *</label>
                    <select
                        className="input"
                        value={form.remote_policy}
                        onChange={(e) =>
                            update("remote_policy", e.target.value)
                        }
                    >
                        <option value="remote">Remote</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="on_site">On-site</option>
                    </select>
                </div>

                {/* LINKS */}
                <div>
                    <label>Website</label>
                    <input
                        className="input"
                        value={form.website ?? ""}
                        onChange={(e) =>
                            update("website", e.target.value || null)
                        }
                    />
                </div>

                <div>
                    <label>LinkedIn</label>
                    <input
                        className="input"
                        value={form.linkedin_url ?? ""}
                        onChange={(e) =>
                            update("linkedin_url", e.target.value || null)
                        }
                    />
                </div>

                {/* SCORE */}
                <div>
                    <label>Score (0-100)</label>
                    <input
                        type="number"
                        min={0}
                        max={100}
                        className="input"
                        value={form.score ?? ""}
                        onChange={(e) =>
                            update("score", e.target.value === "" ? null : Number(e.target.value))
                        }
                    />
                </div>

                {/* WHY INTERESTED */}
                <div style={{ gridColumn: "1 / -1" }}>
                    <label>Why interested</label>
                    <textarea
                        className="input"
                        style={{ minHeight: 90 }}
                        value={form.why_interested ?? ""}
                        onChange={(e) =>
                            update("why_interested", e.target.value || null)
                        }
                    />
                </div>
            </div>

            {/* ACTIONS */}
            <div
                style={{
                    marginTop: 20,
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <button
                    type="submit"
                    style={{
                        padding: "10px 16px",
                        borderRadius: 8,
                        border: "1px solid var(--border)",
                        background: "var(--surface)",
                        color: "var(--text)",
                        cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "var(--hover)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    }}
                >
                    Save company
                </button>
            </div>
        </form>
    );
}