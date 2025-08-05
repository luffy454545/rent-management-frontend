import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">Agent Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-blue-400">
          Dashboard
        </Link>
        <Link to="/properties" className="hover:text-blue-400">
          Properties
        </Link>
        <Link to="/reports" className="hover:text-blue-400">
          Reports
        </Link>
        <button
          onClick={logout}
          className="mt-6 bg-red-500 hover:bg-red-600 py-2 rounded text-white"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
