import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  image: "",
  profile: "",
  allProfile: [
    { image: "https://i.ibb.co/WKrPzZd/iu.jpg", profile: "Mommy" },
    { image: "https://i.ibb.co/JpdSW1q/iu-4.jpg", profile: "Jack" },
    { image: "https://i.ibb.co/ZGwhrNH/iu-2.jpg", profile: "Dad" },
  ],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.image = action.payload.image;
      state.profile = action.payload.profile;
    },
    setAllProfile: (state, action) => {
      state.allProfile = [...state.allProfile, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserProfile,setAllProfile } = profileSlice.actions;

export default profileSlice.reducer;
