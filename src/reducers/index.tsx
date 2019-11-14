import { combineReducers } from "redux";
import { RecipeList } from "../actions/index";
import { recipesReducer } from "./recipes";

export interface StoreState {
  recipes: RecipeList;
}

export const reducers = combineReducers<StoreState>({
  recipes: recipesReducer
});
