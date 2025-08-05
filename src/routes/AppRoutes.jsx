// src/routes/AppRoutes.jsx

import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "../features/auth/Login";
import ForgotPassword from "../features/auth/ForgotPassword";
import ResetPassword from "../features/auth/ResetPassword";
import DashboardLayout from "../components/layout/DashboardLayout";
import ProtectedRoute from "../features/auth/ProtectedRoute";
// Temporary Dashboard placeholder
const Dashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <p>Welcome to your rent management dashboard!</p>
  </div>
);

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [{ index: true, element: <Dashboard /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />,
  },
]);

export default AppRoutes;
