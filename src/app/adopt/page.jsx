"use client";

import { useRouter } from "next/navigation";

export default function AdoptPage() {
  const router = useRouter();

  const handleSubmit = () => {
    const newRequest = {
      id: Date.now(),
      petName: "Max",
      requestDate: new Date().toISOString().split("T")[0],
      pickupDate: "2026-06-20",
      status: "Pending",
    };

    const oldRequests =
      JSON.parse(localStorage.getItem("requests")) || [];

    localStorage.setItem(
      "requests",
      JSON.stringify([...oldRequests, newRequest])
    );

    alert("Adoption request submitted successfully!");
    router.push("/my-requests");
  };

  return (
    <div className="pt-20 flex justify-center">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Adoption Request
        </h1>

        <p className="text-gray-200 mb-6">
          Thank you for choosing a pet. Your request is ready to submit.
        </p>

        <button
          onClick={handleSubmit}
          className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}