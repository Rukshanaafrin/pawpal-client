"use client";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignupPage = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();

        console.log("clicked");

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <form onSubmit={handleSignup}>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                />

                <br />
                <br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                />

                <br />
                <br />

                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        marginTop: "10px",
                    }}
                >
                    Signup
                </button>

            </form>
        </div>
    );
};

export default SignupPage;