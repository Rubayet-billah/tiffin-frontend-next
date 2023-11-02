"use client";

import {
  useDeleteUserFromDbMutation,
  useGetAllUsersQuery,
} from "@/redux/api/authApi";
import Image from "next/image";
import userAvater from "../../../assets/userAvatar.png";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import { userRole } from "@/constants/constants";

const UserManagementPage = () => {
  const { data: users } = useGetAllUsersQuery();
  const [deleteUserFromDb] = useDeleteUserFromDbMutation();

  const handleUserDelete = async (user) => {
    const confirmation = window.confirm(
      `Are you sure to delete this ${user.role}?`
    );
    if (user.role === userRole.admin) {
      toast.error("Sorry you cant delete an admin");
      return;
    }
    if (confirmation) {
      const result = await deleteUserFromDb(user.email);
      if (result.data.deletedCount > 0) {
        toast.success("User deleted successfully");
      }
    }
  };

  return (
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-semibold mb-4">User Management</h1>

      <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {users?.map((user) => (
              <tr key={user?._id}>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        src={user?.image || userAvater}
                        // height={40}
                        // width={40}
                        alt={user?.name}
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {user?.name || "N/A"}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{user?.email}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user?.role === "ADMIN"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {user?.role}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleUserDelete(user)}
                    class="text-red-600 hover:bg-red-100 p-1 rounded text-2xl"
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagementPage;
