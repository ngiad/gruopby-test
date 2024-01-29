import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  function handleProduct(id) {
    console.log("da vao day",id)
    navigate(`/products/${id}`)
  }

  return (
    <div className="products">
      {data.map((item, index) => (
        <Product handleProduct={handleProduct} data={item} key={index} />
      ))}
    </div>
  );
};

export default Products;
