"use client";

import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { Search } from "lucide-react";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar px-8 py-3 text-white border-b border-purple-400/20 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-indigo-900/40 backdrop-blur-xl shadow-lg">

      <div className="flex-1 flex items-center gap-3">

        <img
          src="/assets/logo.png"
          alt="PawPal Logo"
          className="w-14 h-14 rounded-full bg-white/20 p-2 backdrop-blur-md"
        />

        <Link
          href="/"
          className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
        >
          PawPal
        </Link>

      </div>

      <div className="flex items-center gap-6 text-lg">

        <Link
          href="/"
          className="hover:text-cyan-300 duration-300"
        >
          Home
        </Link>

        <div className="flex items-center gap-1 hover:text-cyan-300 duration-300">

          <Search size={18} />

          <Link href="/pets">
            All Pets
          </Link>

        </div>

        {
          user && (
            <>
              <Link
                href="/add-pet"
                className="hover:text-cyan-300 duration-300"
              >
                Add Pet
              </Link>

              <Link
                href="/my-requests"
                className="hover:text-cyan-300 duration-300"
              >
                My Requests
              </Link>
            </>
          )
        }

        {
          user ? (
            <div className="flex items-center gap-3">

              <img
                src={user?.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-cyan-400"
              />

              <button
                onClick={logOut}
                className="btn btn-info text-white"
              >
                Logout
              </button>

            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-info text-white"
            >
              Login
            </Link>
          )
        }

      </div>

    </div>
  );
};

export default Navbar;