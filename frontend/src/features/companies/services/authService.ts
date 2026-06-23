import { api } from "../../../api/client";

export const authService = {
    login: async (
        email: string,
        password: string,
    ) => {
        const response = await api.post("/login", {
            email,
            password,
        });

        return response.data;
    },

    me: async () => {
        const response = await api.post("/me");

        return response.data;
    }
};