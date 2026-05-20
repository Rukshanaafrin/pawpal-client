"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function UpdatePetPage() {
  const { id } = useParams();
  const router = useRouter();

  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/pets/${id}`)
      .then((res) => res.json())
      .then((data) => setPet(data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedPet = {
      name: form.name.value,
      species: form.species.value,
      breed: form.breed.value,
      age: form.age.value,
      image: form.image.value,
      healthStatus: form.healthStatus.value,
      vaccinationStatus: form.vaccinationStatus.value,
      location: form.location.value,
      adoptionFee: form.adoptionFee.value,
      description: form.description.value,
    };

    const res = await fetch(
      `http://localhost:5000/pets/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedPet),
      }
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success("Pet Updated Successfully!");
      router.push("/my-listings");
    }
  };

  if (!pet) {
    return (
      <div className="text-center text-white py-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Update Pet
      </h1>

      <form
        onSubmit={handleUpdate}
        className="space-y-4"
      >
        <input
          name="name"
          defaultValue={pet.name}
          className="input input-bordered w-full text-black"
        />

        <input
          name="species"
          defaultValue={pet.species}
          className="input input-bordered w-full text-black"
        />

        <input
          name="breed"
          defaultValue={pet.breed}
          className="input input-bordered w-full text-black"
        />

        <input
          name="age"
          defaultValue={pet.age}
          className="input input-bordered w-full text-black"
        />

        <input
          name="image"
          defaultValue={pet.image}
          className="input input-bordered w-full text-black"
        />

        <input
          name="healthStatus"
          defaultValue={pet.healthStatus}
          className="input input-bordered w-full text-black"
        />

        <input
          name="vaccinationStatus"
          defaultValue={pet.vaccinationStatus}
          className="input input-bordered w-full text-black"
        />

        <input
          name="location"
          defaultValue={pet.location}
          className="input input-bordered w-full text-black"
        />

        <input
          name="adoptionFee"
          defaultValue={pet.adoptionFee}
          className="input input-bordered w-full text-black"
        />

        <textarea
          name="description"
          defaultValue={pet.description}
          className="textarea textarea-bordered w-full text-black"
        />

        <button
          className="btn bg-cyan-500 text-white"
        >
          Update Pet
        </button>
      </form>
    </div>
  );
}