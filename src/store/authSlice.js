import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authActions';

const initialState = {
    user: {}, // for user object
    idToken: null, // for storing the JWT
    refreshToken: null,
    expireson: null, // for monitoring the registration process.
    loading: false,
    error: null,
    success: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: {
        // login user
        [loginUser.pending]: (state) => {
          state.loading = true
          state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.success = true 
          state.user = payload.user
          state.idToken = payload.idToken
          state.refreshToken = payload.refreshToken
          state.expireson = payload.expireson
        },
        [loginUser.rejected]: (state, { payload }) => {
          state.loading = false
          state.error = payload
        },

        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
            state.user = payload.user
            state.idToken = payload.idToken
            state.refreshToken = payload.refreshToken
            state.expireson = payload.expireson
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
      },
})
  
export const { logout } = authSlice.actions
export default authSlice.reducer