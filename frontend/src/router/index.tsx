import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage.tsx";
import CreateCompanyPage from "../pages/CreateCompanyPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage />,
    },
    {
        path:"/companies/create",
        element: <CreateCompanyPage />,
    },
]);