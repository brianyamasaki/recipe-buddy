import { combineReducers } from "redux";
import { FetchRecipePayload } from "../actions/index";
import { recipesReducer } from "./recipes";

export interface StoreState {
  recipes: FetchRecipePayload;
}

export const reducers = combineReducers<StoreState>({
  recipes: recipesReducer
});
