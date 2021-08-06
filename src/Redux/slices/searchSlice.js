import { createSlice } from "@reduxjs/toolkit";
import fetchSearchData from "../../Api/Search";
const initialState = {
  searchItems: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchItems: (state, action) => {
      state.searchItems = action.payload;
    },
  },
});

export const { setSearchItems } = searchSlice.actions;
export function getSearchData(where) {
  return async (dispatch) => {
    try {
      const data = await fetchSearchData(where);
      dispatch(setSearchItems(data));
    } catch (error) {
      console.error(error);
    }
  };
}
export default searchSlice.reducer;
