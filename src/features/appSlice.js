import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isloading: false,
  },


});

//export const { } = appSlice.actions;

export const selectCount = (state) => state.app.value;



export default appSlice.reducer;
