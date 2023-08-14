import { createSlice } from '@reduxjs/toolkit';


 const storedToken = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('token')) : null;

const initialState = {
  apiToken: storedToken ? storedToken  : null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken : (state , action) => {
    state.apiToken = action.payload
    },
    setLogout : (state ) => {
    state.apiToken = null
    }
  },

});

export const {setToken , setLogout} = loginSlice.actions

export default loginSlice.reducer;
