import React from "react";

const Product = ({ data }) => {
  return (
    <div className="product">
      <div className="overplay">
        <button>By now</button>
      </div>
      <div className="top">
        <img src={data.image} alt="image" />
      </div>
      <div className="bottom">
        <span className="category">{data.category}</span>
        <p className="title">
          <strong>{data.title}</strong>
        </p>
        <span className="price">
          <em style={{ color: "red" }}>$ {data.price}</em>
        </span>
        <p className="description">
          <em>{data.description}</em>
        </p>
      </div>
    </div>
  );
};

export default Product;
