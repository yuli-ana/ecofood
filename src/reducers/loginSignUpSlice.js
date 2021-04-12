import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import login from "../services/login";

export const oauthFetch = createAsyncThunk(
  "oauth/oauthFetch",
  async (credentials) => {
    const response = await login(credentials);

    return response;
  }
);

const initialState = {
  user: {},
  status: "",
  error: null,
};

export const aouthSlice = createSlice({
  name: "oauth",
  initialState,
  reducer: {},
  extraReducers: {
    [oauthFetch.pending]: (state) => {
      state.status = "pending";
    },
    [oauthFetch.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload;
    },
    [oauthFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
  },
});

export const oauthStatus = (state) => state.oauth.status;

export default aouthSlice.reducer;
