import { configureStore } from '@reduxjs/toolkit';

import CustomizerReducer from './customizer/CustomizerSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
  },
});

export default store;
