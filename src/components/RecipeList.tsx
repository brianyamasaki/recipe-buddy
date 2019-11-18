import React from "react";
import { connect } from "react-redux";
import { Media } from "reactstrap";
import { RecipeInfo, fetchRecipes } from "../actions";
import { StoreState } from "../reducers";

import "./RecipeList.scss";

interface RecipeListStateProps {
  recipes: RecipeInfo[];
  loading: boolean;
}

interface RecipeListProps extends RecipeListStateProps {
  fetchRecipes: () => void;
}

class RecipeList extends React.Component<RecipeListProps> {
  state = {
    loading: false,
    recipes: []
  };

  componentDidMount(): void {
    this.props.fetchRecipes();
    // this.setState({
    //   recipes: [
    //     {
    //       name: "fake recipe",
    //       description: "just a silly placeholder"
    //     }
    //   ]
    // });
  }

  renderRecipe = (recipe: RecipeInfo, i: number): JSX.Element => {
    return (
      <Media body>
        <Media heading>{recipe.name}</Media>
        {recipe.description}
      </Media>
    );
  };

  renderList = (): JSX.Element => {
    if (this.props.loading || this.props.recipes.length < 1) {
      return <p>Loading....</p>;
    } else {
      return <Media list>{this.props.recipes.map(this.renderRecipe)}</Media>;
    }
  };

  render() {
    return (
      <div>
        <h3>Recipes</h3>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): RecipeListStateProps => {
  const { loading, recipes } = state.recipes;
  return {
    loading,
    recipes
  };
};

export default connect(mapStateToProps, {
  fetchRecipes
})(RecipeList);
