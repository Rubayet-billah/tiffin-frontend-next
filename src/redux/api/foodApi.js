const { baseApi } = require("./baseApi");

const foodApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFoods: builder.query({
      query: () => "/food-items",
    }),
    getFoodItem: builder.query({
      query: (id) => `/food-items/${id}`,
    }),
  }),
});

export const { useGetFoodsQuery, useGetFoodItemQuery } = foodApi;
