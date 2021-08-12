import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "./rating";

const Products = ({ product, theme }) => {
  const themeColor = theme === "black" ? "dark" : "white";
  const textColor = theme === "black" ? "white" : "dark";
  return (
    <Card
      bg={themeColor}
      text={textColor}
      className="my-3 p-3 rounded"
      key={product._id}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Link to={`/product/${product._id}`}>
        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h3" className={`text-${textColor}`}>
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};
export default Products;
