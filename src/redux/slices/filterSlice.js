import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  curentPage: 1,
  sort: {
    name: "popularity",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurentPage(state, action) {
      state.curentPage = action.payload;
    },
    setFilter(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.curentPage = Number(action.payload.curentPage);
      state.sort = action.payload.sort;
    },
  },
});

export const { setCategoryId, setSort, setCurentPage, setFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
