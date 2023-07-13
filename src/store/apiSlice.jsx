import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getAllProductsData: builder.query({
      query: () => "/store/products",
    }),
    getProductsByCategoryPaginated: builder.query({
      query: ({ categoryId, pageNumber }) =>
        `/store/products/category/page?categoryId=${categoryId}&pageNumber=${pageNumber}`,
    }),
    getAllCategories: builder.query({
        query: () => "/store/categories"
    })
  }),
});

export const {
  useGetAllProductsDataQuery,
  useGetProductsByCategoryPaginatedQuery,
  useGetAllCategoriesQuery
} = apiSlice;
