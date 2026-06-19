import {AppLayout} from "../components/layout/AppLayout";
import {CompanyForm} from "../features/companies/components/CompanyForm";
import {companyService} from "../features/companies/services/companyService.ts";
import type {CreateCompanyPayload} from "../types/company";

export default function CreateCompanyPage() {
    const handleSubmit = async (data: CreateCompanyPayload) => {
        try {
            await companyService.create(data);

            console.log("Company created");
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