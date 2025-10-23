import React from "react";
import { NavLink } from "react-router";

const Registration = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center p-4">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
            Create an Account
          </h1>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="label font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label font-semibold text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="btn w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-md transition-all duration-200"
              >
                Register
              </button>
            </div>
          </form>

          {/* Optional Login Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <NavLink
            to="/auth/login"
              href="/login"
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
