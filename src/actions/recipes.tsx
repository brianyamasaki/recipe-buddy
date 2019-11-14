import { ActionTypes } from "./";

export interface RecipeInfo {
  name: string;
  description: string;
}

export interface RecipeList {
  recipes: RecipeInfo[];
}

export interface FetchRecipesAction {
  type: ActionTypes.fetchRecipesAction;
  payload: RecipeList;
}

export const fetchRecipes = (): FetchRecipesAction => {
  return {
    type: ActionTypes.fetchRecipesAction,
    payload: {
      recipes: []
    }
  };
};
