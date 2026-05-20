"use client";

import { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AuthContext } from "@/providers/AuthProvider";

export default function AdoptPage() {

  const { user } = useContext(AuthContext);

  const params = useParams();
  const router = useRouter();

  const id = params.id;

  const [pet, setPet] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:5000/pets/${id}`)
      .then((res) => res.json())
      .then((data) => setPet(data));

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const form = e.target;

    const requestData = {
      petId: id,
      petName: pet?.name,
      userName: user?.displayName,
      userEmail: user?.email,
      pickupDate: form.pickupDate.value,
      message: form.message.value,
      requestDate: new Date()
        .toISOString()
        .split("T")[0],
      status: "Pending",
    };

    try {

      const res = await fetch(
        "http://localhost:5000/requests",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const data = await res.json();

      if (data.insertedId || data.acknowledged) {

        toast.success(
          "Adoption Request Submitted!"
        );

        router.push("/my-requests");

      }

    }
    catch (error) {

      console.log(error);

      toast.error(
        "Failed to submit request!"
      );

    }

  };

  if (!pet) {

    return (
      <div className="text-center py-20 text-white">
        Loading...
      </div>
    );

  }

  return (

    <div className="min-h-screen flex justify-center items-center px-4 py-10">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl">

        <h1 className="text-4xl font-bold text-center mb-8">
          Adoption Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2">
              Pet Name
            </label>

            <input
              type="text"
              value={pet?.name || ""}
              readOnly
              className="input input-bordered w-full text-black"
            />

          </div>

          <div>

            <label className="block mb-2">
              User Name
            </label>

            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full text-black"
            />

          </div>

          <div>

            <label className="block mb-2">
              User Email
            </label>

            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full text-black"
            />

          </div>

          <div>

            <label className="block mb-2">
              Pickup Date
            </label>

            <input
              type="date"
              name="pickupDate"
              className="input input-bordered w-full text-black"
              required
            />

          </div>

          <div>

            <label className="block mb-2">
              Message
            </label>

            <textarea
              name="message"
              placeholder="Write a message..."
              className="textarea textarea-bordered w-full text-black"
              required
            ></textarea>

          </div>

          <button
            type="submit"
            className="btn bg-cyan-500 hover:bg-cyan-600 border-none text-white w-full"
          >
            Adopt Now
          </button>

        </form>

      </div>

    </div>

  );

}