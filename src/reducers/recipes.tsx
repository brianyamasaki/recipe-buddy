import { ActionTypes, RecipeList, FetchRecipesAction } from "../actions";

const INITIAL_STATE = {
  recipes: []
};

export const recipesReducer = (
  state: RecipeList = INITIAL_STATE,
  action: FetchRecipesAction
) => {
  switch (action.type) {
    case ActionTypes.fetchRecipesAction:
      return action.payload;
    default:
      return state;
  }
};
