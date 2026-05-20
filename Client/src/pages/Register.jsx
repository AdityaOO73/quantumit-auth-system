import { useEffect, useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  CalendarDays,
  UserCircle2,
} from "lucide-react";

import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      dob: "",
      email: "",
      password: "",
    });

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }

  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {

      const res =
        await API.post(
          "/register",
          formData
        );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data
          ?.message ||
          error.message
      );

    }
  };

  return (
    <div className="min-h-screen bg-cyan-700 flex items-center justify-center px-4 py-8">

      <div className="relative w-full max-w-[420px] bg-[#1f2b5c] rounded-2xl overflow-hidden shadow-2xl px-6 sm:px-8 py-8">

        <div className="absolute top-0 left-0 w-full h-24 bg-[#293768] opacity-60 rounded-b-[50%]" />

        <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-cyan-900 font-bold text-xl sm:text-2xl px-10 py-3 shadow-lg whitespace-nowrap rounded-md">
          REGISTER
        </div>

        <div className="mt-24 flex justify-center">

          <div className="w-24 h-24 rounded-full border-4 border-gray-400 flex items-center justify-center">

            <UserCircle2
              size={60}
              className="text-gray-400"
            />

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >

          <div className="flex items-center bg-[#5d678c] rounded-full px-5 py-3">

            <User
              size={20}
              className="text-gray-300 mr-3"
            />

            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="bg-transparent w-full outline-none text-white placeholder-gray-300"
            />

          </div>

          <div className="flex items-center bg-[#5d678c] rounded-full px-5 py-3">

            <CalendarDays
              size={20}
              className="text-gray-300 mr-3"
            />

            <input
              type="date"
              name="dob"
              onChange={handleChange}
              required
              className="bg-transparent w-full outline-none text-white cursor-pointer"
            />

          </div>

          <div className="flex items-center bg-[#5d678c] rounded-full px-5 py-3">

            <Mail
              size={20}
              className="text-gray-300 mr-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="bg-transparent w-full outline-none text-white placeholder-gray-300"
            />

          </div>

          <div className="flex items-center bg-[#5d678c] rounded-full px-5 py-3">

            <Lock
              size={20}
              className="text-gray-300 mr-3"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="bg-transparent w-full outline-none text-white placeholder-gray-300"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-cyan-900 font-bold py-3 rounded-full transition duration-300 cursor-pointer hover:scale-[1.02]"
          >
            REGISTER
          </button>

        </form>

        <p className="text-center text-gray-300 mt-6 text-sm sm:text-base">

          Already have an account?{" "}

          <Link
            to="/"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;