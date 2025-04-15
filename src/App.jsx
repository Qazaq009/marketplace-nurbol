import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SupplierDashboard from "./pages/SupplierDashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Main from "./pages/Main";
import TestSupabase from "./pages/TestSupabase";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/main" element={<Main />} />
      <Route path="/test" element={<TestSupabase />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
