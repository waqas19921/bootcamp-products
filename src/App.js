import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AddProductForm from "./components/products/AddProductForm";
import Products from "./components/products/Products";
import EditProduct from './components/products/EditProduct';
import CartPage from './components/products/CartPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/addProducts" element={<AddProductForm />} />
        <Route path="/edit" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
