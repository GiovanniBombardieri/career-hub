import {CompanyForm} from "../features/companies/components/CompanyForm";
import {companyService} from "../features/companies/services/companyService.ts";
import type {CreateCompanyPayload} from "../types/company";
import {useNavigate} from "react-router-dom";
import {PageHeader} from "../components/layout/PageHeader.tsx";
import {Card} from "../components/ui/Card.tsx";

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
        <>
            <PageHeader  title="Create Company" />

            <Card>
                <CompanyForm onSubmit={handleSubmit}/>
            </Card>
        </>
    );
}