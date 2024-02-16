import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from './types';

interface InitialStateProps {
  items: Item[];
  favorites: Item[];
}

const initialState: InitialStateProps = {
  items: [],
  favorites: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addItemsAll(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    addFavorites(state, action: PayloadAction<Item>) {
      if (state.favorites.find(({ id }) => id === action.payload.id)) {
        state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
        return;
      }
      state.favorites.push(action.payload);
    },
    removeFavorites(state, action: PayloadAction<Item>) {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
    },
    removeCard(state, action: PayloadAction<Item>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
