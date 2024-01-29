import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Notfound from "./pages/Notfound";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route path="/products" element={<Products />}  />
      <Route path="/products/:id" element={<ProductPage />}  />
      <Route path="*" element={<Notfound />}  />
    </Routes>
  </>
}

export default App;
