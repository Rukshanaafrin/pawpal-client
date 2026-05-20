"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="px-10 lg:px-20 pt-10 pb-20">

      {/* HERO SECTION */}
      <div className="hero min-h-[75vh]">

        <div className="hero-content flex-col lg:flex-row-reverse gap-20">

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/assets/hero-pet.jpg"
            alt="Cute Pet"
            className="w-[380px] h-[380px] object-cover rounded-[40px] shadow-2xl border-4 border-cyan-300/30"
          />


          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

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
          </motion.div>

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


        {/* FEATURED PETS */}
        <div className="mt-28">

          <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
            Featured Pets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden">
              <img src="/assets/dog1.png" className="w-full h-60 object-cover" />
              <div className="p-5 text-white">
                <h3 className="text-2xl font-bold">Max</h3>
                <p>Golden Retriever</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden">
              <img src="/assets/cat1.png" className="w-full h-60 object-cover" />
              <div className="p-5 text-white">
                <h3 className="text-2xl font-bold">Snowy</h3>
                <p>Persian Cat</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden">
              <img src="/assets/bird1.png" className="w-full h-60 object-cover" />
              <div className="p-5 text-white">
                <h3 className="text-2xl font-bold">Ruby</h3>
                <p>Northern Cardinal</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden">
              <img src="/assets/rabbit1.png" className="w-full h-60 object-cover" />
              <div className="p-5 text-white">
                <h3 className="text-2xl font-bold">Coco</h3>
                <p>Netherland Dwarf</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden">
              <img src="/assets/dog2.png" className="w-full h-60 object-cover" />
              <div className="p-5 text-white">
                <h3 className="text-2xl font-bold">Buddy</h3>
                <p>Labrador Retriever</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden">
              <img src="/assets/cat2.png" className="w-full h-60 object-cover" />
              <div className="p-5 text-white">
                <h3 className="text-2xl font-bold">Luna</h3>
                <p>Turkish Angora</p>
              </div>
            </div>

          </div>

        </div>

        {/* WHY ADOPT PETS */}
        <div className="mt-28">

          <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
            Why Adopt Pets
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 duration-300 shadow-xl">
              <div className="text-6xl mb-4">❤️</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Save Lives
              </h3>
              <p className="text-gray-200 leading-7">
                Give homeless pets a loving forever home and help animals find safety.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 duration-300 shadow-xl">
              <div className="text-6xl mb-4">🐶</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Loving Companions
              </h3>
              <p className="text-gray-200 leading-7">
                Pets provide friendship, emotional support and unconditional love.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 duration-300 shadow-xl">
              <div className="text-6xl mb-4">🏃</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Healthy Lifestyle
              </h3>
              <p className="text-gray-200 leading-7">
                Daily walks, exercise and playtime improve physical and mental health.
              </p>
            </div>

          </div>

        </div>

        {/* SUCCESS STORIES */}
        <div className="mt-28">

          <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-4">🐕</div>
              <h3 className="text-2xl font-bold mb-3">Max's Journey</h3>
              <p>
                Max found a caring family and now enjoys daily adventures with endless love.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-4">🐱</div>
              <h3 className="text-2xl font-bold mb-3">Luna's Story</h3>
              <p>
                Luna became the most loved member of her new family and enjoys every day.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-4">🐰</div>
              <h3 className="text-2xl font-bold mb-3">Coco's Happiness</h3>
              <p>
                Coco now happily lives with children who adore and care for him.
              </p>
            </div>

          </div>

        </div>

        {/* PET CARE TIPS */}
        <div className="mt-28">

          <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
            Pet Care Tips
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="text-2xl font-bold mb-3">Healthy Nutrition</h3>
              <p>
                Provide nutritious food and fresh water every day.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-4">💉</div>
              <h3 className="text-2xl font-bold mb-3">Vaccination</h3>
              <p>
                Keep vaccinations and regular health checkups updated.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-4">🎾</div>
              <h3 className="text-2xl font-bold mb-3">Daily Exercise</h3>
              <p>
                Ensure daily exercise and playtime for a happy pet.
              </p>
            </div>

          </div>

        </div>

        {/* ADOPTION PROCESS */}
        <div className="mt-28">

          <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
            Adoption Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-3">🔍</div>
              <h3 className="font-bold text-xl">Browse Pets</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-3">📝</div>
              <h3 className="font-bold text-xl">Submit Request</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-3">🤝</div>
              <h3 className="font-bold text-xl">Meet Pet</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-3">🏡</div>
              <h3 className="font-bold text-xl">Take Home</h3>
            </div>

          </div>

        </div>

        {/* WHY CHOOSE PAWPAL */}
        <div className="mt-28">

          <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
            Why Choose PawPal
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">
                Trusted Platform
              </h3>
              <p>
                Safe and reliable pet adoption experience for everyone.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-4">✔️</div>
              <h3 className="text-2xl font-bold mb-3">
                Verified Listings
              </h3>
              <p>
                Every pet listing is carefully reviewed and verified.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center text-white hover:scale-105 duration-300 shadow-xl">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-3">
                Secure Adoption
              </h3>
              <p>
                Easy and secure adoption process from start to finish.
              </p>
            </div>

          </div>

        </div>


      </div>

    </div>
  );
}