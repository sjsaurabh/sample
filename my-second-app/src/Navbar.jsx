import { Link } from "react-router-dom";
import img from './img/logo.png'
const Navbar = () => {
  return (
    <nav id="navbar">
    <div className="left">
      <img src={img} alt="" />
      <h2>Cartoons</h2>
    </div>
      {/* <h1>Pogo</h1> */}
      <input  type="search" className="border border-danger w-50" />
      <button>search</button>
      <Link to="/">Home</Link>
      <Link to="/WishList">wishlist</Link>
    </nav>
  );
};

export default Navbar;
