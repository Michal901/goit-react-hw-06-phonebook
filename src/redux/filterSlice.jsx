import { createSlice } from '@reduxjs/toolkit';

const contactsInitState = [];

const filterSlice = createSlice({
  name: 'filter',
  initialState: contactsInitState,
  reducers: {
    searchContact(state, action) {},
    deleteContact(state, action) {},
  },
});

export const { searchContact, deleteContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
