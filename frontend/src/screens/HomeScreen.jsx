import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import Loader from "../components/loader";
import Message from "../components/message";
import Products from "../components/product";

const HomeScreen = ({ theme }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            {products.map((p) => {
              return (
                <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                  <Products product={p} key={p._id} theme={theme} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
};
export default HomeScreen;
