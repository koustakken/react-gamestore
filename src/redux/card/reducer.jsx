import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    currentCard: null,
  },
  reducers: {
    setCurrentCard: (state, action) => {
      state.currentCard = action.payload;
    },
  },
});

export const { setCurrentCard } = cardsSlice.actions;
export default cardsSlice.reducer;
