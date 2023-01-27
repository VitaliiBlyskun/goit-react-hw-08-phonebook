import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    contactFilter(_, action) {
      return action.payload;
    },
  },
});

export const { contactFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
