const { baseApi } = require("./baseApi");

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    updateUserInDb: builder.mutation({
      query: (email, data) => {
        console.log(email, data, "from api");
        return {
          url: `/users/${email}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useUpdateUserInDbMutation,
} = authApi;
