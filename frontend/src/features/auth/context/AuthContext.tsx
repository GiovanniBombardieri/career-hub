import {createContext, useContext, useEffect, useState} from "react";
import { authService } from "../services/authService.ts";
import { getToken, removeToken, setToken } from "../../../utils/auth.ts";

type User = {
    id: number;
    name: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login: (token: string, user: User) => void;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !!user;

    useEffect(() => {
        const init = async () => {
            const token = getToken();

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const me = await authService.me();
                setUser(me);
            } catch (e) {
                removeToken();
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, []);

    const login = (token: string, user: User) => {
        setToken(token);
        setUser(user);
    }

    const logout = () => {
        removeToken();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout,
            loading,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }

    return context;
}