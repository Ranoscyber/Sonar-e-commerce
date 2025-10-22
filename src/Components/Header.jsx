import { useState } from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const [isActiveNavbar, setIsActiveNavbar] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center px-8 lg:px-40 py-2 border-b border-gray-400">
        <div className="flex gap-5">
          <button
            onClick={() => setIsActiveNavbar(true)}
            className="inline-block lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <h1 className="font-bold text-lg">Sonar Store</h1>
        </div>
        <ul className="hidden lg:flex items-center gap-5">
          <li>
            <NavLink
              to="/"
              className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600"
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-2 ">
          <button className="hover:text-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
          <button className="hover:text-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
          <button className="hover:text-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Section 2 */}

      <header
        className={`fixed top-0 left-0 z-[999] w-[200px] min-h-screen bg-primary text-white p-4 transform transition-transform duration-300 ease-in-out 
          ${isActiveNavbar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsActiveNavbar(false)}
            className="w-10 h-10 border border-white border-dashed rounded-full p-2 hover:bg-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <button onClick={() => setIsActiveNavbar(false)}>
            <NavLink
              to="/"
              className="hover:bg-gray-500 p-2 rounded-full transition-all"
            >
              +Home
            </NavLink>
          </button>
          <button onClick={() => setIsActiveNavbar(false)}>
            <NavLink
              to="/products"
              className="hover:bg-gray-500 p-2 rounded-full transition-all"
            >
              +Product
            </NavLink>
          </button>
          <button onClick={() => setIsActiveNavbar(false)}>
            <NavLink
              to="/contact"
              className="hover:bg-gray-500 p-2 rounded-full transition-all"
            >
              +Contact
            </NavLink>
          </button>
          <button onClick={() => setIsActiveNavbar(false)}>
            <NavLink
              to="/about"
              className="hover:bg-gray-500 p-2 rounded-full transition-all"
            >
              +About
            </NavLink>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
