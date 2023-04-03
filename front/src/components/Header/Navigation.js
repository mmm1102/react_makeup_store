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
    <div style={{ fontSize:"1.25rem" }}>
      <nav className="navbar navbar-expand-md navbar-light mb-3">
        <div className="container px-4 px-lg-5 justify-content-start">
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
              <NavLink className="nav-item nav-link" to="/products">
                Products
              </NavLink>

              {!cookies.access_token ? (
                <>
                  <NavLink className="nav-item nav-link" to="/login">
                    Log <span className="title-shade">in</span>
                  </NavLink>

                  <NavLink className="nav-item nav-link" to="/register">
                    Register
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink onClick={logout} className="nav-item nav-link">
                    Log <span className="title-shade">out</span>
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

              <NavLink className="nav-item nav-link " to="/cart">
                Cart &nbsp;
                <div className="cart-pos">
                <FontAwesomeIcon
              
                  icon={faCartShopping}
                  size="xl"
                  style={{ color: "#efb5a1" }}
                />
                <span className="badge-cart">{quantityCart}</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
