import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // validateStatus: (response, result) => {
    // Unauthorized error handling
    //   if (response.status === 401) {
    //     localStorage.removeItem('accessToken')
    //   }
    //   return response.status === 200 && result.resultCode === 1001
    // },
    // prepareHeaders: (headers) => {
    //   // add token to authentication header
    //   const token = localStorage.getItem('accessToken')
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // }
  }),
  tagTypes: [],

  endpoints: () => ({}),
});
