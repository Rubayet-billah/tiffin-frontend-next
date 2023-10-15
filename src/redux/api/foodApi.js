const { baseApi } = require("./baseApi");

const foodApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFoods: builder.query(() => ({
      query: () => ({
        url: "/items.json",
      }),
    })),
  }),
});

export const { useGetFoodsQuery } = foodApi;
