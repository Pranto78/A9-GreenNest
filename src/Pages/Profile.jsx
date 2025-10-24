import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { GrUpdate } from "react-icons/gr";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      await updateProfile(user, {
        displayName,
        photoURL,
      });

      toast.success("Profile updated successfully!");
      setIsEditing(false);
    //   window.location.reload(); // refresh UI after update
    } catch (error) {
      toast.error("Failed to update profile!");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center border border-green-100">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          My Profile
        </h2>

        {/* Profile Image */}
        <div className="relative inline-block mb-5">
          <img
            src={
              user?.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-green-400 shadow-md mx-auto object-cover"
          />
        </div>

        {/* Display Info */}
        {!isEditing ? (
          <div className="space-y-4">
            {/* Name Card */}
            <div className="bg-gradient-to-r from-[#e8f5e9] to-[#f1f8e9] border border-green-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-green-700">Name:</span>{" "}
                {user?.displayName || "Not provided"}
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-r from-[#f1f8e9] to-[#e8f5e9] border border-green-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all">
              <p className="text-gray-700 text-lg break-words">
                <span className="font-semibold text-green-700">Email:</span>{" "}
                {user?.email}
              </p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="flex justify-center items-center mx-auto gap-2 mt-4 px-6 py-2 text-white font-medium rounded-full bg-gradient-to-r from-[#00b09b] to-[#96c93d] hover:from-[#088c7c] hover:to-[#6f972b] transition-all shadow-md"
            >

              <GrUpdate />
              Update Profile
            </button>
          </div>
        ) : (
          // Edit Form
          <form onSubmit={handleUpdate} className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Display Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex justify-between items-center mt-5">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-white font-medium rounded-full bg-gradient-to-r from-[#00b09b] to-[#96c93d] hover:from-[#088c7c] hover:to-[#6f972b] transition-all shadow-md"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
