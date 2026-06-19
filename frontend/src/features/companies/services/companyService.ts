import { api } from "../../../api/client";
import type { Company } from "../../../types/company.ts";
import type { ApiResponse } from "../../../types/api.ts";
import type {CreateCompanyPayload} from "../../../types/company";

export const companyService = {
    getAll: async (): Promise<ApiResponse<Company[]>> => {
        const { data } = await api.get<ApiResponse<Company[]>>(
            "/companies"
        );

        return data;
    },

    create: async (data: CreateCompanyPayload) => {
        const response = await api.post("/companies", data);

        return response.data;
    },
};