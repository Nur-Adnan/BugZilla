import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const isUserSignedIn = !!localStorage.getItem("token");
  const userRole = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between items-center">
          <div className="flex flex-1 items-stretch justify-start">
            <Link className="flex flex-shrink-0 items-center" to="/">
              <img
                className="block h-12 w-auto"
                src="./bug.png"
                alt="BugZilla"
              />
            </Link>
          </div>
          <div className="">
            <ul className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
              {isUserSignedIn ? (
                <>
                  <Link to="/account">
                    <li className="text-white hover:text-gray-200 font-medium transition duration-300">
                      Account
                    </li>
                  </Link>
                  {userRole === "NormalUser" && (
                    <>
                    <Link to="/form">
                      <li className="text-white hover:text-gray-200 font-medium transition duration-300">
                        Form
                      </li>
                    </Link>
                    <Link to="/userBugTable">
                      <li className="text-white hover:text-gray-200 font-medium transition duration-300">
                        History
                      </li>
                    </Link>
                    </>
                    
                  )}
                  {userRole === "Admin" && (
                    <>
                      <Link to="/bugReport">
                        <li className="text-white hover:text-gray-200 font-medium transition duration-300">
                          Bug Report
                        </li>
                      </Link>
                      <Link to="/solveList">
                        <li className="text-white hover:text-gray-200 font-medium transition duration-300">
                          Solve List
                        </li>
                      </Link>
                    </>
                  )}
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-red-500 hover:bg-red-600 transition duration-300 rounded-full shadow-md transform hover:scale-105"
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <li className="text-white hover:text-gray-200 font-medium transition duration-300">
                      Login
                    </li>
                  </Link>
                  <Link to="/signup">
                    <li className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 transition duration-300 rounded-full shadow-md transform hover:scale-105">
                      Signup
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
