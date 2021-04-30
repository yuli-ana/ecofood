import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import login from "../services/auth";

export const loginFetch = createAsyncThunk(
  "login/loginAccount",
  async (credentials) => {
    const response = await login(credentials);

    return response;
  }
);

const initialState = {
  account: {},
  loading: "idle",
  error: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducer: {
    loginLoading(state, action) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    loginCompleted(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.account = action.payload;
      }
    },
  },
  extraReducers: {
    [loginFetch.pending]: (state) => {
      state.loading = "pending";
    },
    [loginFetch.fulfilled]: (state, action) => {
      state.loading = "fulfilled";
      state.account = action.payload;
    },
    [loginFetch.rejected]: (state, action) => {
      state.loading = "rejected";
      state.error = action.error.message;
    },
  },
});

// export const loginloading = (state) => state.login.loading;

export const { loginLoading, loginCompleted } = loginSlice.actions;

export default loginSlice.reducer;
