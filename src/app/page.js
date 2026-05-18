import Link from "next/link";

export default function Home() {
  return (
    <div className="px-10 lg:px-20 pt-10 pb-20">

      {/* HERO SECTION */}
      <div className="hero min-h-[75vh]">

        <div className="hero-content flex-col lg:flex-row-reverse gap-20">

          <img
            src="/assets/hero-pet.jpg"
            alt="Cute Pet"
            className="w-[380px] h-[380px] object-cover rounded-[40px] shadow-2xl border-4 border-cyan-300/30"
          />

          <div>

            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight text-white">

              Find Your
              <span className="bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                {" "}Perfect Pet
              </span>

              <br />

              Companion

            </h1>

            <p className="py-8 text-lg text-gray-200 max-w-xl leading-8">

              Give loving pets a forever home.
              Explore dogs, cats, rabbits, birds and more
              waiting for adoption.

            </p>

            <div className="flex gap-5">

              <Link
                href="/pets"
                className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white px-8"
              >
                Adopt Now
              </Link>

              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black px-8">
                Learn More
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* CATEGORY SECTION */}
      <div className="mt-28">

        <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
          Browse Pet Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* DOG */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 duration-300 shadow-2xl">

            <img
              src="/assets/dog.png"
              alt="dog"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-5 border-4 border-cyan-300 shadow-lg"
            />

            <h3 className="text-3xl font-bold text-white mb-3">
              Dogs
            </h3>

            <p className="text-gray-200">
              Loyal and friendly pets.
            </p>

          </div>

          {/* CAT */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 duration-300 shadow-2xl">

            <img
              src="/assets/cat.png"
              alt="cat"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-5 border-4 border-pink-300 shadow-lg"
            />

            <h3 className="text-3xl font-bold text-white mb-3">
              Cats
            </h3>

            <p className="text-gray-200">
              Cute and calm furry friends.
            </p>

          </div>

          {/* BIRD */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 duration-300 shadow-2xl">

            <img
              src="/assets/bird.png"
              alt="bird"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-5 border-4 border-blue-300 shadow-lg"
            />

            <h3 className="text-3xl font-bold text-white mb-3">
              Birds
            </h3>

            <p className="text-gray-200">
              Colorful and cheerful pets.
            </p>

          </div>

          {/* RABBIT */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 duration-300 shadow-2xl">

            <img
              src="/assets/rabbit.png"
              alt="rabbit"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-5 border-4 border-purple-300 shadow-lg"
            />

            <h3 className="text-3xl font-bold text-white mb-3">
              Rabbits
            </h3>

            <p className="text-gray-200">
              Soft and adorable companions.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}