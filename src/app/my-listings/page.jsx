"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function MyListingsPage() {
  const [pets, setPets] = useState([]);
  const [requestStatus, setRequestStatus] = useState("Pending");

  useEffect(() => {
    fetch("https://pawpal-server-bay.vercel.app/pets")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this pet?"
    );

    if (!confirmDelete) return;

    const res = await fetch(
      `https://pawpal-server-bay.vercel.app/pets/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success("Pet Deleted Successfully!");

      const remainingPets = pets.filter(
        (pet) => pet._id !== id
      );

      setPets(remainingPets);
    }
  };

  const totalListings = pets.length;
  const availablePets = pets.length;
  const adoptedPets = 0;

  return (
    <div className="px-6 lg:px-20 py-12 text-white">

      <h1 className="text-4xl font-bold mb-8">
        My Listings
      </h1>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white/10 rounded-2xl p-6 text-center">
          <h2 className="text-3xl font-bold text-cyan-300">
            {totalListings}
          </h2>
          <p>Total Listings</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 text-center">
          <h2 className="text-3xl font-bold text-green-300">
            {availablePets}
          </h2>
          <p>Available</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 text-center">
          <h2 className="text-3xl font-bold text-pink-300">
            {adoptedPets}
          </h2>
          <p>Adopted</p>
        </div>

      </div>

      {/* CARDS */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {pets.map((pet) => (

          <div
            key={pet._id}
            className="bg-white/10 rounded-2xl overflow-hidden border border-white/10"
          >

            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold mb-2">
                {pet.name}
              </h2>

              <p>
                Adoption Fee: ৳{pet.adoptionFee}
              </p>

              <p className="mb-4">
                Status: Available
              </p>

              <div className="flex flex-wrap gap-2">

                <button
                  onClick={() =>
                    document
                      .getElementById("request_modal")
                      .showModal()
                  }
                  className="btn btn-sm bg-cyan-500 border-none text-white"
                >
                  Requests
                </button>

                <Link
                  href={`/update-pet/${pet._id}`}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </Link>

                <Link
                  href={`/pets/${pet._id}`}
                  className="btn btn-sm btn-info"
                >
                  View
                </Link>

                <button
                  onClick={() =>
                    handleDelete(pet._id)
                  }
                  className="btn btn-sm btn-error text-white"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* REQUEST MODAL */}

      <dialog
        id="request_modal"
        className="modal"
      >
        <div className="modal-box text-black">

          <h3 className="font-bold text-xl mb-4">
            Adoption Requests
          </h3>

          <p>
            <strong>Name:</strong> Rahim Ahmed
          </p>

          <p>
            <strong>Email:</strong> rahim@gmail.com
          </p>

          <p>
            <strong>Pickup Date:</strong> 2026-06-20
          </p>

          <p>
            <strong>Status:</strong> {requestStatus}
          </p>

          {requestStatus === "Pending" && (
            <div className="flex gap-3 mt-5">

              <button
                onClick={() =>
                  setRequestStatus("Approved")
                }
                className="btn btn-success"
              >
                Approve
              </button>

              <button
                onClick={() =>
                  setRequestStatus("Rejected")
                }
                className="btn btn-error text-white"
              >
                Reject
              </button>

            </div>
          )}

          <form
            method="dialog"
            className="mt-5"
          >
            <button className="btn">
              Close
            </button>
          </form>

        </div>
      </dialog>

    </div>
  );
}