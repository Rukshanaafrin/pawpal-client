"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PetsPage() {

  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {

    fetch(
      `https://pawpal-server-bay.vercel.app/pets?search=${search}&species=${species}`
    )
      .then((res) => res.json())
      .then((data) => setPets(data));

  }, [search, species]);

  return (
    <div className="px-10 lg:px-20 py-16">

      <h1 className="text-5xl font-extrabold text-center text-white mb-10">
        Available Pets
      </h1>

      {/* Search + Filter */}

      <div className="flex flex-col md:flex-row gap-4 mb-10">

        <input
          type="text"
          placeholder="Search by pet name..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="input input-bordered text-black w-full"
        />

        <select
          value={species}
          onChange={(e) =>
            setSpecies(e.target.value)
          }
          className="select select-bordered text-black"
        >

          <option value="">
            All Species
          </option>

          <option value="Dog">
            Dog
          </option>

          <option value="Cat">
            Cat
          </option>

          <option value="Bird">
            Bird
          </option>

          <option value="Rabbit">
            Rabbit
          </option>

        </select>

      </div>

      {/* Pets */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {pets.map((pet) => (

          <div
            key={pet._id}
            className="bg-[#1b2440]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-300/20 shadow-2xl hover:-translate-y-2 duration-300"
          >

            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold text-white mb-3">
                {pet.name}
              </h2>

              <p className="text-gray-200 mb-2">
                Species: {pet.species}
              </p>

              <p className="text-gray-200 mb-2">
                Age: {pet.age}
              </p>

              <p className="text-gray-200 mb-5">
                Location: {pet.location}
              </p>

              <Link
                href={`/pets/${pet._id}`}
                className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white w-full"
              >
                View Details
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}