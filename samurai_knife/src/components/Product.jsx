// Product.jsx
import React from "react";
import "./Product.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product({ image, title, description }) {
  return (
    <div className="product-container">
      <Card
        style={{ width: "18rem", backgroundColor: "#ececec", border: "none" }}
      >
        <Card.Img className="knife" variant="top" src={image} />
        <Card.Body className="text-product">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" className="button-product">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
