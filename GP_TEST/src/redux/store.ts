import { Person, UserInfo } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./states/favorites";
import { peopleSlice } from "./states/people";
import { userSlice } from "./states/user";

export interface AppStore {
  people: Person[];
  favorites: Person[];
  user: UserInfo;
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
    user: userSlice.reducer,
  },
});
