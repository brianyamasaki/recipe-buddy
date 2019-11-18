import { ActionTypes } from "./";

export interface RecipeInfo {
  name: string;
  description: string;
}

export interface FetchRecipePayload {
  recipes: RecipeInfo[];
  loading: boolean;
  errMessage: string;
}

export interface FetchRecipesAction {
  type: ActionTypes.fetchRecipesAction;
  payload: FetchRecipePayload;
}

export const fetchRecipes = (): FetchRecipesAction => {
  return {
    type: ActionTypes.fetchRecipesAction,
    payload: {
      recipes: [
        {
          name: "recipe from action",
          description: "more text"
        }
      ],
      loading: false,
      errMessage: ""
    }
  };
};
