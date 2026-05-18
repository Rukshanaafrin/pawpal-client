"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/providers/AuthProvider";

export default function PetDetailsPage({ params }) {

    const { user } = useContext(AuthContext);

    const { id } = React.use(params);

    const pets = [
        {
            id: 1,
            name: "Max",
            image: "/assets/dog1.png",
            category: "Dog",
            age: "2 Years",
            location: "Dhaka",
            breed: "Golden Retriever",
            description:
                "Friendly, playful and loving dog looking for a forever home. Very active and great with families and kids.",
        },

        {
            id: 2,
            name: "Luna",
            image: "/assets/cat1.png",
            category: "Cat",
            age: "1 Year",
            location: "Chittagong",
            breed: "Persian Cat",
            description:
                "Cute and calm cat who loves cuddles and attention.",
        },

        {
            id: 3,
            name: "Coco",
            image: "/assets/bird1.png",
            category: "Bird",
            age: "8 Months",
            location: "Sylhet",
            breed: "Parrot",
            description:
                "Colorful and cheerful bird with a playful nature.",
        },

        {
            id: 4,
            name: "Snowy",
            image: "/assets/rabbit1.png",
            category: "Rabbit",
            age: "1.5 Years",
            location: "Rajshahi",
            breed: "White Rabbit",
            description:
                "Soft and adorable rabbit looking for care and love.",
        },

        {
            id: 5,
            name: "Rocky",
            image: "/assets/dog2.png",
            category: "Dog",
            age: "3 Years",
            location: "Khulna",
            breed: "Husky",
            description:
                "Energetic dog perfect for active families.",
        },

        {
            id: 6,
            name: "Kitty",
            image: "/assets/cat2.png",
            category: "Cat",
            age: "10 Months",
            location: "Barishal",
            breed: "British Shorthair",
            description:
                "Sweet little cat who loves sleeping and playing.",
        },

        {
            id: 7,
            name: "Kiwi",
            image: "/assets/bird2.png",
            category: "Bird",
            age: "6 Months",
            location: "Rangpur",
            breed: "Love Bird",
            description:
                "Very friendly bird with beautiful colors.",
        },

        {
            id: 8,
            name: "Bunny",
            image: "/assets/rabbit2.png",
            category: "Rabbit",
            age: "1 Year",
            location: "Mymensingh",
            breed: "Mini Lop",
            description:
                "Cute rabbit who enjoys human company.",
        },
    ];

    const pet = pets.find(
        (singlePet) => singlePet.id === Number(id)
    );

    return (

        <div className="px-2 lg:px-20 pt-10 pb-6">

            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">

                <div className="flex flex-col lg:flex-row">

                    {/* IMAGE */}

                    <div className="lg:w-1/2">

                        <img
                            src={pet.image}
                            alt={pet.name}
                            className="w-full h-[500px] object-cover"
                        />

                    </div>

                    {/* DETAILS */}

                    <div className="lg:w-1/2 p-4 text-white flex flex-col justify-center">

                        <h1 className="text-5xl font-extrabold mb-8">
                            {pet.name}
                        </h1>

                        <div className="space-y-5 text-lg">

                            <p>
                                <span className="font-bold text-cyan-300">
                                    Category:
                                </span>{" "}
                                {pet.category}
                            </p>

                            <p>
                                <span className="font-bold text-cyan-300">
                                    Age:
                                </span>{" "}
                                {pet.age}
                            </p>

                            <p>
                                <span className="font-bold text-cyan-300">
                                    Location:
                                </span>{" "}
                                {pet.location}
                            </p>

                            <p>
                                <span className="font-bold text-cyan-300">
                                    Breed:
                                </span>{" "}
                                {pet.breed}
                            </p>

                            <p className="leading-8 text-gray-200">
                                <span className="font-bold text-cyan-300">
                                    Description:
                                </span>{" "}
                                {pet.description}
                            </p>

                        </div>

                        <Link
                            href={user ? `/adopt/${pet.id}` : "/login"}
                            className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white mt-10 w-fit px-10"
                        >
                            Adopt Now
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}