import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";


import { useNavigate } from "react-router-dom";
import { useGetUserID } from "../../hooks/useGetUserID";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  // const [user, setUser] = useState([]);
  const userID = useGetUserID();
  const adminID = "6415ffeac3e264eb4b71074a";


  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.location.replace="http://localhost:3000/login";
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light mb-3">
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
              <NavLink className="nav-item nav-link" to="/my_profile">My Profile <FontAwesomeIcon icon={faUser} className="highlight" /></NavLink>

              </>

            )}
            {userID===adminID ? (
              <NavLink className="nav-item nav-link" to="/admin_dashboard">
                Admin Dashboard
              </NavLink>
            ) : (
              <></>
            )}

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
