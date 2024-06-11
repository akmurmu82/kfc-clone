import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: null,
  name: "User",
  email: "",
  photoURL:
    "https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png",
  phoneNumber: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.phoneNumber = action.payload.phoneNumber;
    },
    clearUser(state) {
      state._id = null;
      state.name = "";
      state.email = "";
      state.photoURL = "";
      state.phoneNumber = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
