import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, Mail, Lock , Waves} from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left Side - Logo/Branding */}
        <div className="w-1/2 bg-gray-100 flex flex-col items-center justify-center p-10">
          <div className="text-3xl font-semibold mb-2">Flow Quint</div>
          <div className="text-sm text-gray-500">
            <Waves />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-semibold mb-4">Welcome Back</h2>
          <p className="text-sm text-gray-500 mb-6">
            Login to your Flow Quint account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email or Username</label>
              <div className="flex items-center border px-4 py-2 rounded focus-within:ring-2 focus-within:ring-blue-500">
                <Mail className="w-4 h-4 text-gray-500 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="me@example.com or username"
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm mb-1">Password</label>
              <div className="flex items-center border px-4 py-2 rounded focus-within:ring-2 focus-within:ring-blue-500">
                <Lock className="w-4 h-4 text-gray-500 mr-2" />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>
            
            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>

          <div className="text-sm text-center mt-6 text-gray-600">
            Need assistance?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Contact us
            </a>
          </div>

          <div className="text-xs text-gray-400 text-center mt-6">
            By clicking continue, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
