import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProfileApi = createApi({
  reducerPath: "getProfile",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://leadsapi.backendz.co/public/api",
    prepareHeaders: (headers, { getState }) => { 
        const apiToken = getState().login.apiToken;   
        if (apiToken) {
          headers.set('Authorization', `Bearer ${apiToken}`);
        }
        return headers;
      },
  }),
  endpoints: (builder) => ({
    getProfile : builder.query ({
        query : () => 'me',

    })
  }),
});


export const {useGetProfileQuery} = getProfileApi