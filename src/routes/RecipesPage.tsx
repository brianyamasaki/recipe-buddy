import React from "react";

import { Row, Col } from "reactstrap";
import RecipeList from "../components/RecipeList";

const RecipesPage = () => (
  <Row>
    <Col>
      <h1>Recipes</h1>
      <RecipeList />
    </Col>
  </Row>
);

export default RecipesPage;
