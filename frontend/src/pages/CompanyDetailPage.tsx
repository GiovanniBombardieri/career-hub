import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCompany } from "../features/companies/hooks/useCompanies.ts";
import { useCompanyNotes } from "../features/company-notes/hooks/useCompanyNotes.ts";
import { companyNotesService } from "../features/company-notes/services/companyNotesService.ts";
import { useCompanyContacts } from "../features/contacts/hooks/useCompanyContacts";
import { contactsService } from "../features/contacts/services/contactsService";

export default function CompanyDetailPage() {
    const { id } = useParams();
    const { company, loading, error } = useCompany(Number(id));
    const {
        notes,
        loading: notesLoading,
        refetch,
    } = useCompanyNotes(Number(id));
    const [noteContent, setNoteContent] = useState("");
    const [savingNote, setSavingNote] = useState(false);
    const {
        contacts,
        loading: contactsLoading,
    } = useCompanyContacts(Number(id));

    const handleSaveNote = async () => {
        const content = noteContent.trim();

        if (!content) {
            return;
        }

        try {
            setSavingNote(true);
            await companyNotesService.create(Number(id), {
                content,
            });
            setNoteContent("");
            await refetch();
        } catch (error) {
            console.error("Failed to save note", error);
        } finally {
            setSavingNote(false);
        }
    };

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
                            value={noteContent}
                            onChange={(e) => setNoteContent(e.target.value)}
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
                            onKeyDown={(e) => {
                                if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                                    void handleSaveNote();
                                }
                            }}
                        />

                        <button
                            style={{ margin: "8px" }}
                            onClick={handleSaveNote}
                            disabled={savingNote || !noteContent.trim()}
                        >
                            {savingNote ? "Saving..." : "Save note"}
                        </button>

                        {notesLoading ? (
                            <p style={{ marginTop: "12px" }}>Loading notes...</p>
                        ) : notes.length === 0 ? (
                            <p style={{ marginTop: "12px", fontSize: "12px", opacity: 0.7 }}>
                                No notes yet
                            </p>
                        ) : (
                            notes.map((note) => (
                                <div
                                    key={note.id}
                                    style={{
                                        marginTop: "12px",
                                        padding: "12px",
                                        border: "1px solid var(--border)",
                                        borderRadius: "8px",
                                        background: "var(--bg)",
                                    }}
                                >
                                    <div style={{ whiteSpace: "pre-wrap" }}>
                                        {note.content}
                                    </div>

                                    <p
                                        style={{
                                            marginTop: "8px",
                                            fontSize: "12px",
                                            opacity: 0.7,
                                            color: "var(--text)",
                                        }}
                                    >
                                        {new Date(note.created_at).toLocaleString()}
                                    </p>
                                </div>
                            ))
                        )}
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
                            {contactsLoading ? (
                                <p>Loading contacts...</p>
                            ) : contacts.length === 0 ? (
                                <p
                                    style={{
                                        fontSize: "13px",
                                        opacity: 0.7,
                                    }}
                                >
                                    No contacts yet
                                </p>
                            ) : (
                                contacts.map(contact => (
                                    <div
                                        key={contact.id}
                                        style={{
                                            marginTop: "12px",
                                            padding: "12px",
                                            border: "1px solid var(--border)",
                                            borderRadius: "8px",
                                            background: "var(--bg)",
                                        }}
                                    >
                                        <strong>{contact.full_name}</strong>

                                        <div
                                            style={{
                                                fontSize: "13px",
                                                opacity: 0.8,
                                                marginTop: "4px",
                                            }}
                                        >
                                            {contact.role.name}
                                        </div>

                                        {contact.email && (
                                            <div style={{ marginTop: "8px" }}>
                                                {contact.email}
                                            </div>
                                        )}

                                        {contact.linkedin_url && (
                                            <div>
                                                <a
                                                    href={contact.linkedin_url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    LinkedIn
                                                </a>
                                            </div>
                                        )}

                                        <div
                                            style={{
                                                marginTop: "8px",
                                                fontSize: "12px",
                                                opacity: 0.7,
                                            }}
                                        >
                                            {contact.relationship_status}
                                        </div>
                                    </div>
                                ))
                            )}
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