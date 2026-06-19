import { api } from "../../../api/client";

export const companyService = {
    getAll: async () => {
        const { data } = await api.get("/companies");

        return data;
    }
}