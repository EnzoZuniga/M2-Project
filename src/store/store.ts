import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenu } from '../interface/IMenu';
import { PartEnumType } from '../constant/PartEnum';
import { RootState } from '../interface/IRootState';

const initialState: RootState = {
  displayPart: "default",
  menu: undefined,
};

const store = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setDisplayPart: (state, action: PayloadAction<PartEnumType>) => {
      state.displayPart = action.payload;
    },
    setMenu: (state, action: PayloadAction<IMenu>) => {
      state.menu = action.payload;
    },
    resetStore: () => initialState,
  },
});

export const { setDisplayPart, setMenu, resetStore } = store.actions;
export default configureStore({
  reducer: store.reducer,
});
