import { configureStore } from '@reduxjs/toolkit';

import countryReducer from './countrySlice';

export default configureStore({
  reducer: {
    country: countryReducer,
  },
});
