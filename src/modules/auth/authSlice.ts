import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateUser, IStateUserData } from "./interfaces/IStateUser";
import { fetchUserLogin } from "modules/auth/authThunk";

const initialState: IStateUser = {
  user: {
    username: null,
    token: null,
  },
  loading: false,
  error: null,
};

interface IResponse {
  username: string;
  access_token: string;
  token_type: string;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserLogin.pending, (state) => {
      state.loading = true;
      state.user = { username: null, token: null };
      state.error = null;
    });
    builder.addCase(
      fetchUserLogin.fulfilled,
      (state, action: PayloadAction<IResponse>) => {
        state.user.username = action.payload.username;
        state.user.token = action.payload.access_token;
        state.loading = false;
      }
    );
    builder.addCase(
      fetchUserLogin.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
