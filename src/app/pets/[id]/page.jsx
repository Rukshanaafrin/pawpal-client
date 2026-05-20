import Link from "next/link";

async function getPet(id) {
  const res = await fetch(`http://localhost:5000/pets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function PetDetailsPage({ params }) {

  const { id } = await params;

  const pet = await getPet(id);

  if (!pet) {
    return (
      <div className="text-white text-center py-20 text-3xl">
        Pet Not Found
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-20 py-12">

      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-[600px] object-cover"
            />
          </div>

          <div className="p-8 text-white">

            <h1 className="text-4xl font-bold mb-6">
              {pet.name}
            </h1>

            <div className="space-y-3">

              <p>
                <span className="font-bold text-cyan-300">
                  Species:
                </span>{" "}
                {pet.species}
              </p>

              <p>
                <span className="font-bold text-cyan-300">
                  Breed:
                </span>{" "}
                {pet.breed}
              </p>

              <p>
                <span className="font-bold text-cyan-300">
                  Age:
                </span>{" "}
                {pet.age}
              </p>

              <p>
                <span className="font-bold text-cyan-300">
                  Health Status:
                </span>{" "}
                {pet.healthStatus}
              </p>

              <p>
                <span className="font-bold text-cyan-300">
                  Vaccination:
                </span>{" "}
                {pet.vaccinationStatus}
              </p>

              <p>
                <span className="font-bold text-cyan-300">
                  Location:
                </span>{" "}
                {pet.location}
              </p>

              <p>
                <span className="font-bold text-cyan-300">
                  Adoption Fee:
                </span>{" "}
                ৳{pet.adoptionFee}
              </p>

              <p>
                <span className="font-bold text-cyan-300">
                  Owner Email:
                </span>{" "}
                {pet.ownerEmail}
              </p>

              <div className="pt-3">

                <p className="font-bold text-cyan-300 mb-2">
                  Description:
                </p>

                <p className="text-gray-200">
                  {pet.description}
                </p>

              </div>

            </div>

            <Link
              href={`/adopt/${pet._id}`}
              className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white mt-8"
            >
              Adopt Now
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}