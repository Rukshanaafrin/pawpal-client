export default function MyListingsPage() {

  const pets = [
    {
      id: 1,
      name: "Max",
      image: "https://i.ibb.co.com/Y7PDPF7j/dog1.jpg",
      price: 6000,
      status: "Available",
    },
    {
      id: 2,
      name: "Snowy",
      image: "https://i.ibb.co.com/0yH939K3/cat1.jpg",
      price: 3000,
      status: "Available",
    },
  ];

  return (
    <div className="px-6 lg:px-20 py-12 text-white">

      <h1 className="text-4xl font-bold mb-8">
        My Listings
      </h1>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white/10 rounded-2xl p-6 text-center">
          <h2 className="text-3xl font-bold text-cyan-300">
            2
          </h2>
          <p>Total Listings</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 text-center">
          <h2 className="text-3xl font-bold text-green-300">
            2
          </h2>
          <p>Available</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 text-center">
          <h2 className="text-3xl font-bold text-pink-300">
            0
          </h2>
          <p>Adopted</p>
        </div>

      </div>

      {/* CARDS */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {pets.map((pet) => (

          <div
            key={pet.id}
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
                Adoption Fee: ৳{pet.price}
              </p>

              <p className="mb-4">
                Status: {pet.status}
              </p>

              <div className="flex flex-wrap gap-2">

                <button className="btn btn-sm bg-cyan-500 border-none text-white">
                  Requests
                </button>

                <button className="btn btn-sm btn-warning">
                  Edit
                </button>

                <button className="btn btn-sm btn-info">
                  View
                </button>

                <button className="btn btn-sm btn-error text-white">
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}