import {configureStore} from '@reduxjs/toolkit';
import listReducer from './reducers/listSlice';
import coordsReducer from './reducers/coordsSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    coords: coordsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
