import React, { useEffect, useState } from "react";

const Category = ({ filterCategoryForProducts }) => {
  const [categories, setCategorys] = useState([]);
  const [pick, setPick] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategorys(json));
  }, []);


  useEffect(() => {
    filterCategoryForProducts(pick)
  },[pick])

  return (
    <>
      <ul>
        {categories.map((item, index) => {
          return (
            <li key={index}>
              <input
                onChange={() => {
                  if (item === pick) setPick("");
                  else setPick(item);
                }}
                id={`input${index}`}
                type="checkbox"
                name="filter"
                value={item}
                checked={pick === item}
              />
              <label htmlFor={`input${index}`}>{item}</label>
              {/* <button onClick={() => filterCategoryForProducts(item)}>{item}</button> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Category;
