import { createSlice, CreateSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
  name: 'favorites',
  initialState: {
    favItems: [],
  },
  reducers: {
    setFav: (state, action) => {
      state.favItems.push(action.payload);
    },
    deleteFav: (state, action) => {
      state.favItems = state.favItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setFav, deleteFav } = favSlice.actions;
export default favSlice.reducer;
