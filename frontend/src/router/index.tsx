import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage.tsx";
import CreateCompanyPage from "../pages/CreateCompanyPage.tsx";
import {AppLayout} from "../components/layout/AppLayout";
import CompanyDetailPage from "../pages/CompanyDetailPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import {ProtectedRoute} from "../components/auth/ProtectedRoute.tsx";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        element: (
            <ProtectedRoute>
                <AppLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/",
                element: <DashboardPage/>,
            },
            {
                path: "/companies/create",
                element: <CreateCompanyPage/>,
            },
            {
                path: "/companies/:id",
                element: <CompanyDetailPage />,
            }
        ]
    }
]);