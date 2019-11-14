import React from "react";
import { Media } from "reactstrap";
import { RecipeInfo } from "../actions/recipes";

class RecipeList extends React.Component {
  state = {
    loading: false,
    recipes: []
  };

  componentDidMount() {
    this.setState({
      recipes: [
        {
          name: "fake recipe",
          description: "just a silly placeholder"
        }
      ]
    });
  }

  renderRecipe = (recipe: RecipeInfo, i: number) => {
    return (
      <Media body>
        <Media heading>{recipe.name}</Media>
        {recipe.description}
      </Media>
    );
  };

  renderList = () => {
    if (this.state.loading || this.state.recipes.length < 1) {
      return <p>Loading....</p>;
    } else {
      return <Media list>{this.state.recipes.map(this.renderRecipe)}</Media>;
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

export default RecipeList;
