import {configureStore} from "@reduxjs/toolkit"
import authSlice from "../features/auth/authSlice"
import dashboardSlice  from "../features/dashboard/dashboardSlice"
import userSlice from "../features/user/userSlice"

export default configureStore({
    reducer:{
        userauth:authSlice,
        dashController:dashboardSlice,
        userData:userSlice
    }
})