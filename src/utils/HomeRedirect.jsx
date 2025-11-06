import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const HomeRedirect = () => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    if (isAuthenticated) return <Navigate to="/content" replace />;
    return <Navigate to="/login" replace />;
};

export default HomeRedirect;
 