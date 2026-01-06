import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Products from "./screens/Products";
import Cart from "./screens/Cart";
import Orders from "./screens/Orders";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return <h1>Gorakhpuri Smart Bazar</h1>; (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products"
          element={<ProtectedRoute><Products /></ProtectedRoute>}
        />
        <Route
          path="/cart"
          element={<ProtectedRoute><Cart /></ProtectedRoute>}
        />
        <Route
          path="/orders"
          element={<ProtectedRoute><Orders /></ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}
