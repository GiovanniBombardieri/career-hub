import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import {useAuth} from "../../features/auth/context/AuthContext.tsx";

type Props = {
    children: ReactNode;
}

export function ProtectedRoute({ children }: Props) {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return null;
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}