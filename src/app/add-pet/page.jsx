"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";
import { toast } from "react-toastify";
import PrivateRoute from "@/components/PrivateRoute";

function AddPetContent() {

  const { user } = useContext(AuthContext);

  const router = useRouter();

  const handleAddPet = async (e) => {

    e.preventDefault();

    const form = e.target;

    const petData = {
      name: form.name.value,
      species: form.species.value,
      breed: form.breed.value,
      age: form.age.value,
      gender: form.gender.value,
      image: form.image.value,
      healthStatus: form.healthStatus.value,
      vaccinationStatus: form.vaccinationStatus.value,
      location: form.location.value,
      adoptionFee: form.adoptionFee.value,
      description: form.description.value,
      ownerEmail: user?.email,
    };

    fetch("http://localhost:5000/pets", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(petData),
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.insertedId || data.acknowledged) {

          toast.success("Pet Added Successfully!");

          form.reset();

          setTimeout(() => {
            router.push("/my-listings");
          }, 1000);
        }
      })
      .catch(() => {
        toast.error("Failed to add pet!");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10">

      <form
        onSubmit={handleAddPet}
        className="space-y-4 w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20"
      >

        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Add New Pet
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Pet Name"
          className="input input-bordered w-full text-black"
          required
        />

        <input
          type="text"
          name="species"
          placeholder="Species (Dog/Cat/Bird/Rabbit)"
          className="input input-bordered w-full text-black"
          required
        />

        <input
          type="text"
          name="breed"
          placeholder="Breed"
          className="input input-bordered w-full text-black"
          required
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          className="input input-bordered w-full text-black"
          required
        />

        <select
          name="gender"
          className="select select-bordered w-full text-black"
        >
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full text-black"
          required
        />

        <input
          type="text"
          name="healthStatus"
          placeholder="Health Status"
          className="input input-bordered w-full text-black"
          required
        />

        <input
          type="text"
          name="vaccinationStatus"
          placeholder="Vaccination Status"
          className="input input-bordered w-full text-black"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full text-black"
          required
        />

        <input
          type="number"
          name="adoptionFee"
          placeholder="Adoption Fee"
          className="input input-bordered w-full text-black"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full text-black"
          required
        ></textarea>

        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full text-black bg-gray-100"
        />

        <button
          type="submit"
          className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none w-full"
        >
          Add Pet
        </button>

      </form>

    </div>
  );
}

export default function AddPetPage() {
  return (
    <PrivateRoute>
      <AddPetContent />
    </PrivateRoute>
  );
}