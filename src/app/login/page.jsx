"use client";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const LoginPage = () => {

  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>

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

        <button type="submit">
          Login
        </button>

      </form>
    </div>
  );
};

export default LoginPage;