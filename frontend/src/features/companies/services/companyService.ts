import { api } from "../../../api/client";
import type { Company } from "../../../types/company.ts";
import type { ApiResponse } from "../../../types/api.ts";

export const companyService = {
    getAll: async (): Promise<ApiResponse<Company[]>> => {
        const { data } = await api.get<ApiResponse<Company[]>>(
            "/companies"
        );

        return data;
    },
};