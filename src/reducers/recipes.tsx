import {
  ActionTypes,
  FetchRecipePayload,
  FetchRecipesAction
} from "../actions";

const INITIAL_STATE: FetchRecipePayload = {
  recipes: [],
  errMessage: "",
  loading: false
};

export const recipesReducer = (
  state: FetchRecipePayload = INITIAL_STATE,
  action: FetchRecipesAction
) => {
  switch (action.type) {
    case ActionTypes.fetchRecipesAction:
      return action.payload;
    default:
      return state;
  }
};
