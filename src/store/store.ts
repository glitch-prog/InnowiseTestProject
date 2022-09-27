import {configureStore} from '@reduxjs/toolkit';
import listReducer from './reducers/listSlice';
import coordsReducer from './reducers/coordsSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    coords: coordsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
