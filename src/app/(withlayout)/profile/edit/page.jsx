"use client";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import userAvatar from "../../../../assets/userAvatar.png";
import { updateUser } from "@/redux/features/authSlice";
import Image from "next/image";

const ProfileEditPage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(updateUser(data));
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-md mx-auto max-w-3xl">
      <div className="text-center mb-4">
        <Image
          src={user.image || userAvatar}
          alt="User Profile Picture"
          className="w-20 h-20 rounded-full mx-auto"
          height={80}
          width={80}
        />
        <h2 className="text-xl font-semibold mt-2">
          {user.name || "Anonymous User"}
        </h2>
        <p className="text-gray-500">{user.email}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">User Information</h3>
          <div className="mb-3">
            <label htmlFor="name" className="block text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user.name}
              className="input input-bordered w-full"
              {...register("name")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="block text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={user.image}
              className="input input-bordered w-full"
              {...register("image")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="block text-gray-600">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={user.phone}
              className="input input-bordered w-full"
              {...register("phone")}
            />
          </div>
        </div>

        <div className="mt-4">
          {/* <h3 className="text-lg font-semibold">Profile Settings</h3> */}
          <button type="submit" className="btn btn-sm btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditPage;
