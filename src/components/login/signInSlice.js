import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/users";

export const oauthFetch = createAsyncThunk(
  "oauth/oauthFetch",
  async (credentials) => {
    const response = await api.login(credentials);

    return response.data;
  }
);

const initialState = {
  account: {},
  status: "idle",
  error: null,
};

export const aouthSlice = createSlice({
  name: "oauth",
  initialState,
  reducer: {},
  extraReducers: {
    [oauthFetch.pending]: (state) => {
      state.status = "loading";
    },
    [oauthFetch.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = "succeeded";
      state.account = action.payload;
    },
    [oauthFetch.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const oauthStatus = (state) => state.oauth.status;

export default aouthSlice.reducer;
