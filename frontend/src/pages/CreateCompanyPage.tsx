import {AppLayout} from "../components/layout/AppLayout";
import {CompanyForm} from "../features/companies/components/CompanyForm";
import {companyService} from "../features/companies/services/companyService.ts";
import type {CreateCompanyPayload} from "../types/company";
import {useNavigate} from "react-router-dom";

export default function CreateCompanyPage() {
    const navigate = useNavigate();
    const handleSubmit = async (data: CreateCompanyPayload) => {
        try {
            await companyService.create(data);

            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AppLayout>
            <h1>Create Company</h1>

            <CompanyForm
                onSubmit={handleSubmit}
            />
        </AppLayout>
    );
}