import { useEffect, useState } from "react";
import { contactsService } from "../services/contactsService";
import type { ContactRole } from "../../../types/contactRole";

export function useContactRoles() {
    const [roles, setRoles] = useState<ContactRole[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRoles() {
            const response = await contactsService.getRoles();
            setRoles(response.data.data);
            setLoading(false);
        }

        fetchRoles();
    }, []);

    return {
        roles,
        loading,
    };
}