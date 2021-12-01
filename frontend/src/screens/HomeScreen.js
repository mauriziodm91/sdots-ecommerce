import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <h1>Ultimos Productos</h1>
      <Row>
        {products.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={item}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
