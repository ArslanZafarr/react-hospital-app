import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const loginApi = createApi({
   reducerPath : 'loginadmin',
   baseQuery :  fetchBaseQuery({ baseUrl : 'https://leadsapi.backendz.co/public/api'}), 
   endpoints :  (builder) => ({
    userLogin : builder.mutation({
        query : (userData) => ({
            url : 'login',
            method : 'POST',
            body : userData,
        })
    })
   })

})


export const {useUserLoginMutation} = loginApi