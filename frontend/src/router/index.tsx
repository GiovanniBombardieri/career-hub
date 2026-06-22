import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage.tsx";
import CreateCompanyPage from "../pages/CreateCompanyPage.tsx";
import {AppLayout} from "../components/layout/AppLayout";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <DashboardPage/>,
            },
            {
                path: "/companies/create",
                element: <CreateCompanyPage/>,
            },
        ]
    }
]);