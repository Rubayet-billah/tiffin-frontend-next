"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import userAvatar from "../../../assets/userAvatar.png";
import Link from "next/link";

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-white p-4 shadow-lg rounded-md mx-auto max-w-3xl">
      <div className="text-center mb-4">
        <img
          src={user?.image || userAvatar}
          alt="User Profile Picture"
          className="w-20 h-20 rounded-full mx-auto"
          // height={80}
          // width={80}
        />
        <h2 className="text-xl font-semibold mt-2">
          {user?.name || "Anonymous User"}
        </h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <div className="border-t border-gray-200 mt-4">
        <div className="mt-4">
          <h3 className="text-lg font-semibold">User Information</h3>
          <p>Name: {user?.name || "Not provided"}</p>
          <p>Email: {user?.email}</p>
          <p>Phone: {user?.phone || "Not provided"}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Profile Settings</h3>
          <Link href="/profile/edit" className="btn btn-sm btn-primary">
            Edit Profile
          </Link>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Order History</h3>
          <p>No purchase history available.</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
