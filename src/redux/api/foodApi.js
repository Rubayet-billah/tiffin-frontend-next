const { baseApi } = require("./baseApi");

const foodApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Existing queries...
    getFoods: builder.query({
      query: () => "/food-items",
    }),
    getFoodItem: builder.query({
      query: (id) => `/food-items/${id}`,
      providesTags: ["FOOD"],
    }),
    // Add a mutation to create a new review
    addReview: builder.mutation({
      query: ({ id, review }) => ({
        url: `/food-items/${id}/reviews`, // Backend route to add a review
        method: "POST",
        body: review,
      }),
      invalidatesTags: ["FOOD"],
    }),
  }),
});

export const {
  useGetFoodsQuery,
  useGetFoodItemQuery,
  useAddReviewMutation, // Add this mutation hook
} = foodApi;
