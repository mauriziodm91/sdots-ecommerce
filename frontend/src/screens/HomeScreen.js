import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:5000/api/products");
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Ultimos Productos</h1>
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={item}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
