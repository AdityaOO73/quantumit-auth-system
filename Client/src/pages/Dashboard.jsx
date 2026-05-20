import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings, XCircle } from "lucide-react";

import API from "../services/api";
import employees from "../data/employees.json";

const Dashboard = () => {
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const [users, setUsers] = useState([]);

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/users", {
          headers: {
            Authorization: token,
          },
        });

        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const allUsers = [...employees, ...users];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-3 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold break-words">
            Welcome {loggedInUser?.name}
          </h2>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Registered Users List
          </p>
        </div>

        <button
          onClick={logoutHandler}
          className="border border-red-500 bg-transparent hover:bg-red-600 px-6 py-2 cursor-pointer rounded-xl font-medium transition w-full sm:w-auto"
        >
          Logout
        </button>
      </div>
      <div className="bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
        <div className="max-h-[500px] overflow-auto">
          <table className="w-full min-w-[950px] border-collapse">
            <thead className="bg-slate-800 text-gray-300 sticky top-0 z-20">
              <tr>
                <th className="p-4 sm:p-5 text-left text-sm sm:text-base">
                  S.No
                </th>

                <th className="p-4 sm:p-5 text-left text-sm sm:text-base">
                  Name
                </th>

                <th className="p-4 sm:p-5 text-left text-sm sm:text-base">
                  Date of Birth
                </th>

                <th className="p-4 sm:p-5 text-left text-sm sm:text-base">
                  Email
                </th>

                <th className="p-4 sm:p-5 text-left text-sm sm:text-base">
                  Password
                </th>

                <th className="p-4 sm:p-5 text-left text-sm sm:text-base">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {allUsers.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-800 hover:bg-slate-900/70 transition"
                >
                  <td className="p-4 sm:p-5 text-sm sm:text-base">
                    {index + 1}
                  </td>

                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-[220px]">
                      <img
                        src={
                          user.image ||
                          `https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`
                        }
                        alt={user.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-slate-700 flex-shrink-0"
                      />

                      <span className="font-medium text-sm sm:text-base whitespace-nowrap">
                        {user.name}
                      </span>
                    </div>
                  </td>

                  <td className="p-4 sm:p-5 text-gray-300 text-sm sm:text-base whitespace-nowrap">
                    {user.dob}
                  </td>

                  <td className="p-4 sm:p-5 text-gray-300 text-sm sm:text-base whitespace-nowrap">
                    {user.email}
                  </td>

                  <td className="p-4 sm:p-5 text-gray-300 text-sm sm:text-base">
                    {"*".repeat(8)}
                  </td>

                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <button className="text-cyan-400 hover:text-cyan-300 transition">
                        <Settings size={18} />
                      </button>

                      <button className="text-red-400 hover:text-red-300 transition">
                        <XCircle size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
