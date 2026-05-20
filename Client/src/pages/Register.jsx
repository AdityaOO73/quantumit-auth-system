import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/register", formData);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-full bg-slate-700 text-white outline-none"
          />

          <input
            type="date"
            name="dob"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-full bg-slate-700 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-full bg-slate-700 text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-full bg-slate-700 text-white outline-none"
          />

          <button
            type="submit"
            className=" mx-auto block w-2/3 bg-cyan-400 border border-cyan-400 bg-cyan-800 cursor-pointer hover:bg-cyan-400 text-white font-semibold py-3 rounded-full transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-cyan-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
