import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const LogoutApi = createApi({
  reducerPath: 'logout',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://leadsapi.backendz.co/public/api',
   
    prepareHeaders: (headers, { getState }) => { 
        const apiToken = getState().login.apiToken;   
        if (apiToken) {
          headers.set('Authorization', `Bearer ${apiToken}`);
        }
        return headers;
      },
    
  }),
  endpoints: (builder) => ({ 
    userLogout: builder.mutation({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useUserLogoutMutation} = LogoutApi;
