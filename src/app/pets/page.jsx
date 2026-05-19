import Link from "next/link";

async function getPets() {
  const res = await fetch("http://localhost:5000/pets", {
    cache: "no-store",
  });

  return res.json();
}

export default async function PetsPage() {

  const pets = await getPets();

  return (
    <div className="px-10 lg:px-20 py-16">

      <h1 className="text-5xl font-extrabold text-center text-white mb-14">
        Available Pets
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {
          pets.map((pet) => (

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
                  Category: {pet.category}
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

          ))
        }

      </div>

    </div>
  );
}