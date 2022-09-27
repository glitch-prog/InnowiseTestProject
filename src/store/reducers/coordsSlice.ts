import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface ListState {
  value: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  type: boolean;
}

// Define the initial state using that type
const initialState: ListState = {
  value: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  type: false,
};

export const coordsSlice = createSlice({
  name: 'coords',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCoordsToStore: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
    setType: state => {
      state.type = !state.type;
    },
  },
});

export const {setCoordsToStore, setType} = coordsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.list.value;

export default coordsSlice.reducer;
