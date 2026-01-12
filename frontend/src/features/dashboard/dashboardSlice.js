import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
  name: 'dashController',
  initialState: {
    student:[],
    progress:[],
    income:[],
    settings:[]
  },
  reducers: {
    setStudent:(state,action)=>{
      state.student=action.payload
    },
  }
})
export const {setStudent}=dashboardSlice.actions;
export default dashboardSlice.reducer;