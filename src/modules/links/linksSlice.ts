import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, ILink } from "./interface/ILink";
import { fetchAddLink, fetchGetLinks } from "./linksThunk";

const initialState: IInitialState = {
  links: [],
  currentLink:null,
  limit:6,
  offset:0,
  order:'',
  direction:'',
  loading: false,
  error: null,
};

const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetLinks.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.currentLink = null;
  });
  builder.addCase(
    fetchGetLinks.fulfilled,
    (state, action: PayloadAction<ILink[]>) => {
      state.links = action.payload;
      state.loading = false;
    }
  );
  builder.addCase(
    fetchGetLinks.rejected,
    (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    }
  );
  builder.addCase(fetchAddLink.pending, (state) => {
    state.loading = true;
    state.error = null;
    state.currentLink = null;
});
builder.addCase(
  fetchAddLink.fulfilled,
  (state, action: PayloadAction<ILink>) => {
    state.currentLink = action.payload
    state.loading = false;
  }
);
builder.addCase(
  fetchAddLink.rejected,
  (state, action: PayloadAction<any>) => {
    state.loading = false;
    state.error = action.payload;
  }
);
  },
});

export const {} = linksSlice.actions;
export default linksSlice.reducer;
