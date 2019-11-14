import React from "react";
import { Row, Col } from "reactstrap";
import RecipeList from "../components/RecipeList";

const HomePage = () => (
  <Row>
    <Col>
      <h1 className="text-center">Home Page</h1>
      <RecipeList />
    </Col>
  </Row>
);

export default HomePage;
