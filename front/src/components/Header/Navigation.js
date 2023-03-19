import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navigation = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav container d-flex justify-content-between">
            <NavLink className="nav-item nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Log in
            </NavLink>

            <NavLink className="nav-item nav-link" to="/register">
              Register
            </NavLink>
            <NavLink className="nav-item nav-link" to="/cart">
              Cart
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
