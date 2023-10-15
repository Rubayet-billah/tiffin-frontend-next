const { baseApi } = require("./baseApi");

const foodApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFoods: builder.query({
      query: () => "/food-items",
    }),
  }),
});

export const { useGetFoodsQuery } = foodApi;
