import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Item, Items } from '../types';

export const fetchData = createApi({
  reducerPath: 'products',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),

  endpoints: (build) => ({
    getAllProducts: build.query<Items, void>({
      query: () => ({
        url: `/products`,
      }),
    }),
    getInfoProduct: build.query<Item, string>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useLazyGetInfoProductQuery } = fetchData;
