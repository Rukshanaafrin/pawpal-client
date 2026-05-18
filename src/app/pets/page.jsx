import Link from "next/link";

export default function PetsPage() {
  return (
    <div className="px-10 lg:px-20 py-16">

      <h1 className="text-5xl font-extrabold text-center text-white mb-14">
        Available Pets
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* PET 1 */}
        <div className="bg-[#1b2440]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-300/20 shadow-2xl hover:-translate-y-2 duration-300">

          <img
            src="/assets/dog1.png"
            alt="dog"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h2 className="text-3xl font-bold text-white mb-3">
              Max
            </h2>

            <p className="text-gray-200 mb-2">
              Category: Dog
            </p>

            <p className="text-gray-200 mb-2">
              Age: 2 Years
            </p>

            <p className="text-gray-200 mb-5">
              Location: Dhaka
            </p>

            <Link
              href="/pets/1"
              className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white w-full"
            >
              View Details
            </Link>

          </div>

        </div>

        {/* PET 2 */}
        <div className="bg-[#2a1f45]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-pink-300/20 shadow-2xl hover:-translate-y-2 duration-300">

          <img
            src="/assets/cat1.png"
            alt="cat"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h2 className="text-3xl font-bold text-white mb-3">
              Luna
            </h2>

            <p className="text-gray-200 mb-2">
              Category: Cat
            </p>

            <p className="text-gray-200 mb-2">
              Age: 1 Year
            </p>

            <p className="text-gray-200 mb-5">
              Location: Chittagong
            </p>

            <Link
              href="/pets/2"
              className="btn bg-pink-400 hover:bg-pink-500 border-none text-white w-full"
            >
              View Details
            </Link>

          </div>

        </div>

        {/* PET 3 */}
        <div className="bg-[#1f3048]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-blue-300/20 shadow-2xl hover:-translate-y-2 duration-300">

          <img
            src="/assets/bird1.png"
            alt="bird"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h2 className="text-3xl font-bold text-white mb-3">
              Coco
            </h2>

            <p className="text-gray-200 mb-2">
              Category: Bird
            </p>

            <p className="text-gray-200 mb-2">
              Age: 8 Months
            </p>

            <p className="text-gray-200 mb-5">
              Location: Sylhet
            </p>

            <Link
              href="/pets/3"
              className="btn bg-blue-400 hover:bg-blue-500 border-none text-white w-full"
            >
              View Details
            </Link>

          </div>

        </div>

        {/* PET 4 */}
        <div className="bg-[#33224d]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-300/20 shadow-2xl hover:-translate-y-2 duration-300">

          <img
            src="/assets/rabbit1.png"
            alt="rabbit"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h2 className="text-3xl font-bold text-white mb-3">
              Snowy
            </h2>

            <p className="text-gray-200 mb-2">
              Category: Rabbit
            </p>

            <p className="text-gray-200 mb-2">
              Age: 1.5 Years
            </p>

            <p className="text-gray-200 mb-5">
              Location: Rajshahi
            </p>

            <Link
              href="/pets/4"
              className="btn bg-purple-400 hover:bg-purple-500 border-none text-white w-full"
            >
              View Details
            </Link>

          </div>

        </div>

        {/* PET 5 */}
        <div className="bg-[#1b2440]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-300/20 shadow-2xl hover:-translate-y-2 duration-300">

          <img
            src="/assets/dog2.png"
            alt="dog"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h2 className="text-3xl font-bold text-white mb-3">
              Rocky
            </h2>

            <p className="text-gray-200 mb-2">
              Category: Dog
            </p>

            <p className="text-gray-200 mb-2">
              Age: 3 Years
            </p>

            <p className="text-gray-200 mb-5">
              Location: Khulna
            </p>

            <Link
              href="/pets/5"
              className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white w-full"
            >
              View Details
            </Link>

          </div>

        </div>

        {/* PET 6 */}
        <div className="bg-[#2a1f45]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-pink-300/20 shadow-2xl hover:-translate-y-2 duration-300">

          <img
            src="/assets/cat2.png"
            alt="cat"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h2 className="text-3xl font-bold text-white mb-3">
              Kitty
            </h2>

            <p className="text-gray-200 mb-2">
              Category: Cat
            </p>

            <p className="text-gray-200 mb-2">
              Age: 10 Months
            </p>

            <p className="text-gray-200 mb-5">
              Location: Barishal
            </p>

            <Link
              href="/pets/6"
              className="btn bg-pink-400 hover:bg-pink-500 border-none text-white w-full"
            >
              View Details
            </Link>

          </div>

        </div>

        {/* PET 7 */}
        <div className="bg-[#1f3048]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-blue-300/20 shadow-2xl hover:-translate-y-2 duration-300">

          <img
            src="/assets/bird2.png"
            alt="bird"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h2 className="text-3xl font-bold text-white mb-3">
              Kiwi
            </h2>

            <p className="text-gray-200 mb-2">
              Category: Bird
            </p>

            <p className="text-gray-200 mb-2">
              Age: 6 Months
            </p>

            <p className="text-gray-200 mb-5">
              Location: Rangpur
            </p>

            <Link
              href="/pets/7"
              className="btn bg-blue-400 hover:bg-blue-500 border-none text-white w-full"
            >
              View Details
            </Link>

          </div>

        </div>

        {/* PET 8 */}
        <div className="bg-[#33224d]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-300/20 shadow-2xl hover:-translate-y-2 duration-300">

          <img
            src="/assets/rabbit2.png"
            alt="rabbit"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h2 className="text-3xl font-bold text-white mb-3">
              Bunny
            </h2>

            <p className="text-gray-200 mb-2">
              Category: Rabbit
            </p>

            <p className="text-gray-200 mb-2">
              Age: 1 Year
            </p>

            <p className="text-gray-200 mb-5">
              Location: Mymensingh
            </p>

            <Link
              href="/pets/8"
              className="btn bg-purple-400 hover:bg-purple-500 border-none text-white w-full"
            >
              View Details
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}