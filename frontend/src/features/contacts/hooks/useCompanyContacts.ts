import { useEffect, useState } from "react";
import { contactsService } from "../services/contactsService";
import type { Contact } from "../../../types/contact";

export function useCompanyContacts(companyId: number) {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchContacts = async () => {
        setLoading(true);

        try {
            const response = await contactsService.getAll(companyId);
            setContacts(response.data.data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        void fetchContacts();
    }, [companyId]);

    return {
        contacts,
        loading,
        refetch: fetchContacts,
    };
}