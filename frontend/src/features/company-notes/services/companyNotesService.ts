import { api } from "../../../api/client";
import type {
    CompanyNote,
    CreateCompanyNotePayload,
} from "../../../types/companyNote.ts";

export const companyNotesService = {
    async getAll(companyId: number): Promise<CompanyNote[]> {
        const { data } = await api.get(`/companies/${companyId}/notes`);
        return data;
    },

    create: async(
        companyId: number,
        data: CreateCompanyNotePayload,
    ) => {
        const response = await api.post(
            `/companies/${companyId}/notes`,
            data,
        );

        return response.data;
    },
}