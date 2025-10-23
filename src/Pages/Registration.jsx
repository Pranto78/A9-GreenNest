import React, { use, useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
// import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
// import { signOut } from "firebase/auth";



const Registration = () => {
  const { logOut } = use(AuthContext);
  const { createUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password, name, photo)
      .then(() => {
        toast.success("Registered successfully!");
        logOut(); // safe now
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Signed up with Google!");
    
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
            Create an Account
          </h1>

          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="btn w-full bg-green-600 text-white mt-2"
            >
              Register
            </button>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn w-full border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            <FcGoogle size={22} /> Continue with Google
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <NavLink
              to="/auth/login"
              className="text-green-700 font-semibold hover:underline"
            >
              Login here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
