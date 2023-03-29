import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, img, seller, ratings, quantity } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button className="btn-cart">Add To Cart</button>
    </div>
  );
};

export default Product;
