import { configureStore } from '@reduxjs/toolkit';
import { fetchData } from './RTKQuery/getAllProducts.api';
import { productReducer } from './rootSlice';

const store = configureStore({
  reducer: {
    [fetchData.reducerPath]: fetchData.reducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchData.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
