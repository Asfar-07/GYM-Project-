import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'userauth',
  initialState: {
    email:''
  },
  reducers: {
  }
})

export default authSlice.reducer;