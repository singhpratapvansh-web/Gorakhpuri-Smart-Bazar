import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ color: "white", marginRight: 10 }}>Home</Link>
      <Link to="/products" style={{ color: "white", marginRight: 10 }}>Products</Link>
      <Link to="/cart" style={{ color: "white" }}>Cart</Link>
    </div>
  );
}
