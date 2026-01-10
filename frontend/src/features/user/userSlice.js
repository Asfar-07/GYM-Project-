import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    email:''
  },
  reducers: {
  }
})

export default userSlice.reducer;