"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const LoginPage = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      await signInUser(email, password);

      toast.success("Login Successful!");

      form.reset();

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();

      toast.success("Google Login Successful!");

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-white">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Welcome Back
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
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
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white w-full mt-3"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn w-full bg-white text-black border-none"
          >
            Continue with Google
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-cyan-300 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;