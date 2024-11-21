import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-300 text-black">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-2">
        {/* Logo */}
        <Link to="/">
          <img className="w-[130px] h-[30px]" src="https://expertbuddy.com/assets/images/footerLogo.png" alt="logo" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/resources" className="hover:underline">
            Resources
          </Link>
          <Link to="/chatroom" className="hover:underline">
            Chat Room
          </Link>
          <Link to="/events" className="hover:underline">
            Events
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
          <Link to="/setting" className="hover:underline">
            Setting
          </Link>
          
        </div>

        {/* Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span>Hello, {user.name}</span>
              <button
                onClick={logout}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          )}

          
          <Link to="/register" className="hover:underline">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">Register</button>
          </Link>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-300 p-3">
          <div className="flex flex-col gap-4">
            <Link to="/resources" className="hover:underline">
              Resources
            </Link>
            <Link to="/chatroom" className="hover:underline">
              Chat Room
            </Link>
            <Link to="/events" className="hover:underline">
              Events
            </Link>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
            <Link to="/setting" className="hover:underline">
              Setting
            </Link>


            {user ? (
              <button
                onClick={logout}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
              >
                Login
              </Link>
            )}

            <Link to="/register" className="hover:underline">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">Register</button>
            </Link>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
