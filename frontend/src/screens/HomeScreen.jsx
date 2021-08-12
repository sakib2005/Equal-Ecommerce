import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

import Products from "../components/product";

const HomeScreen = ({ theme }) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProduct(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {products.map((p) => {
            return (
              <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                <Products product={p} key={p._id} theme={theme} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default HomeScreen;
