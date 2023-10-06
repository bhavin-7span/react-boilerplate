import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
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
  tagTypes: ["User"],

  endpoints: () => ({}),
});
