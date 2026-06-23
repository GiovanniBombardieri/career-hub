import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { getToken } from "../../utils/auth.ts";

type Props = {
    children: ReactNode;
}

export function ProtectedRoute({ children }: Props) {
    const token = getToken();

    if (!token) {
        return <Navigate to="/login" replace />;
    }
    if (!getToken()) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}