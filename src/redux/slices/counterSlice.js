import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count = action.payload;
    },
  },
});
console.log(counterSlice.actions);
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
