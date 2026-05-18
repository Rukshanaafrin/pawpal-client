"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";

const RegisterPage = () => {

  const { createUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleRegister = async (e) => {

    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    try {

      const result = await createUser(email, password);

      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      });

      alert("Registration Successful!");

      form.reset();

      router.push("/");

    }
    catch (error) {

      console.log(error.message);

      alert(error.message);

    }
  };

  return (

    <div className="min-h-screen flex justify-center items-center px-4 py-10">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-white">

        <h1 className="text-4xl font-extrabold text-center mb-8">
          Create Account
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          {/* NAME */}

          <div>

            <label className="block mb-2 font-semibold">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full h-12 bg-white/10 text-white"
              required
            />

          </div>

          {/* PHOTO URL */}

          <div>

            <label className="block mb-2 font-semibold">
              Photo URL
            </label>

            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full h-12 bg-white/10 text-white"
              required
            />

          </div>

          {/* EMAIL */}

          <div>

            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full h-12 bg-white/10 text-white"
              required
            />

          </div>

          {/* PASSWORD */}

          <div>

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                autoComplete="new-password"
                className="input input-bordered w-full h-12 bg-white/10 text-white pr-14"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-black"
              >

                {
                  showPassword
                    ? <EyeOff size={20} />
                    : <Eye size={20} />
                }

              </button>

            </div>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white w-full mt-3"
          >
            Register
          </button>

        </form>

        <p className="text-center text-gray-300 mt-6">

          Already have an account?{" "}

          <Link
            href="/login"
            className="text-cyan-300 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default RegisterPage;