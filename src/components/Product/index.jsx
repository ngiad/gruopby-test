import React from "react";

const Product = ({ data }) => {
  return (
    <div className="product">
      <div>
        <img src={data.image} alt="image" />
      </div>
      <div>
        <span>{data.category}</span>
        <p>
          <strong>{data.title}</strong>
        </p>
        <span>{data.price}</span>
        <p>
          <em>{data.description}</em>
        </p>
      </div>
    </div>
  );
};

export default Product;
