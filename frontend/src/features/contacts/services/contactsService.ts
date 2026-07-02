import { api } from "../../../api/client";
import type { ApiResponse } from "../../../types/api.ts";
import type { Contact} from "../../../types/contact.ts";
import type { ContactRole } from "../../../types/contactRole.ts";

export const contactsService = {
    getAll(companyId: number) {
        return api.get<ApiResponse<Contact[]>>(
            `/companies/${companyId}/contacts`,
        );
    },

    create(
        companyId: number,
        data: {
            full_name: string;
            email?: string;
            linkedin_url?: string;
            contact_role_id: number;
            relationship_status: string;
            notes?: string;
        }
    ) {
        return api.post<ApiResponse<Contact>>(
            `/companies/${companyId}/contacts`,
            data
        );
    },

    async getRoles() {
        return api.get<ApiResponse<ContactRole[]>>("/contact-roles");
    }
};