import { api } from "../../../api/client";

export async function getCompanies() {
    const response = await api.get("/companies");

    return response.data;
}