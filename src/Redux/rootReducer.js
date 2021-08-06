import searchReducer from "./slices/searchSlice";
import profileReducer from "./slices/profileSlice";
import { movieApi, tvShowApi } from "../Utils/services";

export const reducer = {
  search: searchReducer,
  profile: profileReducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [tvShowApi.reducerPath]: tvShowApi.reducer,
};
