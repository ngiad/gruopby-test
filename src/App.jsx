import { useEffect, useState } from "react";
import Product from "./components/Product";
import Category from "./components/Category";

function App() {
  const [data, setData] = useState([]);
  const [render, setRender] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setRender(json);
      });
  }, []);

  const filterCategoryForProducts = (cateory) => {
    if (!cateory) setRender(data);
    else setRender(Object.groupBy(data, (item) => item.category)[cateory]);
    // else
    //   fetch(`https://fakestoreapi.com/products/category/${cateory}`)
    //     .then((res) => res.json())
    //     .then((json) => setRender(json));
  };

  return (
    <div>
      <div className="header">
        <div className="left">
          <h1>Logo</h1>
        </div>
        <div className="right"></div>
        <div className="right"></div>
      </div>
      <div className="contener">
        <div className="category">
          <div>
            <h4>Tìm kiếm sản phẩm</h4>
            <Category filterCategoryForProducts={filterCategoryForProducts} />
          </div>
        </div>
        <div className="products">
          {render.map((item, index) => (
            <Product data={item} key={index} />
          ))}
        </div>
      </div>
      <div className="footer">
        <p style={{ textAlign: "center", padding: "8px", opacity: "0.9" }}>
          @by : TRAN DAI NGHIA
        </p>
      </div>
    </div>
  );
}

export default App;
