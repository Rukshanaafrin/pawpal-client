import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">

      <h1 className="text-7xl font-extrabold mb-4">
        404
      </h1>

      <p className="text-xl mb-6">
        Oops! Page Not Found
      </p>

      <Link
        href="/"
        className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white"
      >
        Back To Home
      </Link>

    </div>
  );
}