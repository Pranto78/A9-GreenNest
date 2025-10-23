import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👁️ icons for show/hide

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // toggle function
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 ">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
            Login Now
          </h1>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="label font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label font-semibold text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                required
              />

              
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-8 text-gray-600 hover:text-green-600 transition-all"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-green-700 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-md transition-all duration-200"
              >
                Login
              </button>
            </div>
          </form>

          {/* Registration Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Don’t have an account?{" "}
            <NavLink
              to="/auth/registration"
              className="text-green-700 font-semibold hover:underline"
            >
              Register here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
