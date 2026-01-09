import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  userInfo: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
  },
});
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
