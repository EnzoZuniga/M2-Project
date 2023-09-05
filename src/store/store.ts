import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenu } from '../interface/IMenu';
import { PartEnumType } from '../constant/PartEnum';
import { RootState } from '../interface/IRootState';
import { ICommande } from '../interface/ICommande';

const initialState: RootState = {
  displayPart: "default",
  menu: undefined,
  currentCommande: undefined, 
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
    setCurrentCommande: (state, action: PayloadAction<Partial<ICommande>>) => {
      state.currentCommande = action.payload;
    },
    resetStore: () => initialState,
  },
});

export const { setCurrentCommande, setDisplayPart, setMenu, resetStore } = store.actions;
export default configureStore({
  reducer: store.reducer,
});
