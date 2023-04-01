import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

import { useGetUserID } from "../../hooks/useGetUserID";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const userID = useGetUserID();
  const adminID = "642181626af1943f12c5abac";

  const quantityCart = useSelector((state) => state.cart.quantity);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.location.replace = "http://localhost:3000/login";
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light mb-3">
        <div className="container px-4 px-lg-5 justify-content-sm-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
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
              <li class="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/products"
                >
                  Products
                </NavLink>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="
text-decoration-none" href="#">
                    <NavLink
                  className="dropdown-item"
                
                  to="/products"
                >
                  All products
                </NavLink>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              {!cookies.access_token ? (
                <>
                  <NavLink className="nav-item nav-link" to="/login">
                    Log in
                  </NavLink>

                  <NavLink className="nav-item nav-link" to="/register">
                    Register
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink onClick={logout} className="nav-item nav-link">
                    Log out
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/my_profile">
                    My Profile{" "}
                    <FontAwesomeIcon icon={faUser} className="highlight" />
                  </NavLink>
                </>
              )}
              {userID === adminID ? (
                <NavLink className="nav-item nav-link" to="/admin_dashboard">
                  Admin Dashboard
                </NavLink>
              ) : (
                <></>
              )}

              <NavLink className="nav-item nav-link cart-pos" to="/cart">
                Cart &nbsp;
                <FontAwesomeIcon
                  className="cart-position"
                  icon={faCartShopping}
                  size="xl"
                  style={{ color: "#0D6EFD" }}
                />
                <span className="badge-cart">{quantityCart}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
