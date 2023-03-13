import { createSlice } from '@reduxjs/toolkit';
import { uniqBy } from 'lodash';

export const countrySlice = createSlice({
  name: 'country',
  initialState: {
    currentCountry: {},
    selectedCountries: [],
  },
  reducers: {
    addCountry: (state, { payload }) => ({
      ...state,
      currentCountry: payload,
      selectedCountries: uniqBy([...state.selectedCountries, payload], 'id'),
    }),
  },
});

export const { addCountry } = countrySlice.actions;

export default countrySlice.reducer;
