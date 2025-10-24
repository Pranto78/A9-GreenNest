import React, { useContext, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../Firebase/firebase.config";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleForgotPassword = () => {
    const email = prompt("Please enter your email to reset password:");
    if (!email) return;

    const auth = getAuth(app);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
            Login Now
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="relative">
              <label className="label font-semibold text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-8 text-gray-600"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            {/* Forgot Password Link */}
            <p
              className="text-sm text-green-700 hover:underline cursor-pointer text-right"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </p>

            <button
              type="submit"
              className="btn w-full bg-green-600 text-white mt-2"
            >
              Login
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
