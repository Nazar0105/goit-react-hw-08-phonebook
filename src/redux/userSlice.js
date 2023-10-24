// userSlice
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    user: null, 
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});


export const { setToken, clearToken, setUser } = userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.user; 

export default userSlice.reducer;
