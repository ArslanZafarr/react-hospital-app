import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getUserApi = createApi({
  reducerPath: "getuser",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://leadsapi.backendz.co/public/api/",
    prepareHeaders: (headers, { getState }) => {
      const apiToken = getState().login.apiToken;
      if (apiToken) {
        headers.set("Authorization", `Bearer ${apiToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "users",
    }),


    registerUser : builder.mutation({
        query : (userData) => ({
            url : 'users',
            method : 'POST',
            body : userData
        })
    })

  }),
});

export const { useGetUserQuery , useRegisterUserMutation } = getUserApi;
