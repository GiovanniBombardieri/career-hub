import { useEffect } from 'react';
import { getCompanies} from "../features/companies/services/companyService.ts";

export default function DashboardPage() {
    useEffect(() => {
        getCompanies()
            .then(console.log)
            .catch(console.error);
    }, []);

    return <h1>Career HUB</h1>;
}