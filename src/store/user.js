import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  userList: [
    {
      id: 1,
      name: "Jhon",
      email: "jhon@gmail.com",
      phone: "9875678678",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const userActions = userSlice.actions;

export default userSlice;
