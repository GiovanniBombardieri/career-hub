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

    return (
        <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                />
            </div>

            {/* COUNTRY */}
            <div>
                <label>Country</label>
                <input
                    type="text"
                    value={form.country}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            country: e.target.value,
                        }))
                    }
                />
            </div>

            {/* REGION */}
            <div>
                <label>Region</label>
                <input
                    type="text"
                    value={form.region ?? ""}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            region: e.target.value,
                        }))
                    }
                />
            </div>

            {/* CITY */}
            <div>
                <label>City</label>
                <input
                    type="text"
                    value={form.city ?? ""}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            city: e.target.value,
                        }))
                    }
                />
            </div>

            {/* STATUS */}
            <div>
                <label>Status</label>
                <select
                    value={form.status}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            status: e.target.value as CreateCompanyPayload["status"],
                        }))
                    }
                >
                    <option value="prospect">Prospect</option>
                    <option value="applied">Applied</option>
                    <option value="interviewing">Interviewing</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                    <option value="archived">Archived</option>
                </select>
            </div>

            {/* REMOTE POLICY */}
            <div>
                <label>Remote Policy</label>
                <select
                    value={form.remote_policy}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            remote_policy: e.target.value as CreateCompanyPayload["remote_policy"],
                        }))
                    }
                >
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="on_site">Onsite</option>
                </select>
            </div>

            {/* COMPANY SIZE */}
            <div>
                <label>Company Size</label>
                <select
                    value={form.company_size}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            company_size: e.target.value,
                        }))
                    }
                >
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                </select>
            </div>

            {/* WEBSITE */}
            <div>
                <label>Website</label>
                <input
                    type="text"
                    value={form.website ?? ""}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            website: e.target.value,
                        }))
                    }
                />
            </div>

            {/* LINKEDIN */}
            <div>
                <label>LinkedIn</label>
                <input
                    type="text"
                    value={form.linkedin_url ?? ""}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            linkedin_url: e.target.value,
                        }))
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
                    value={form.score ?? ""}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            score: e.target.value === "" ? undefined : Number(e.target.value),
                        }))
                    }
                />
            </div>

            {/* WHY INTERESTED */}
            <div>
                <label>Why interested</label>
                <textarea
                    value={form.why_interested ?? ""}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            why_interested: e.target.value,
                        }))
                    }
                />
            </div>

            {/* SUBMIT */}
            <button type="submit">
                Save
            </button>
        </form>
    );
}