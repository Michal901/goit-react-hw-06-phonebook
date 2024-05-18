import { createSlice } from '@reduxjs/toolkit';

const contactsInitState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addName(state, action) {},
    addNumber(state, action) {},
    addContact(state, action) {},
  },
});

export const { addName, addNumber, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
