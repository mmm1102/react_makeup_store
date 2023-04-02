import React from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import axios from "axios";

const MyProfile = () => {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const { id } = useParams();

  let userID = useGetUserID();
  console.log(userID);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5500/auth/users/${userID}`
      );

      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    e.preventDefault();
    if (user.username !== "" && user.password !== "" && user.email !== "") {
      const updateUser = axios.patch(
        `http://localhost:5500/auth/users/${userID}`,
        user,
        { "Content-Type": "application/json" }
      );
      if (updateUser) toast.success("User info updated");
    }
  };
  return (
    <div className="content d-flex justify-content-sm-center">
      <div>
        <h3 className="mb-3">My Profile</h3>
        <h4>
          Hello <span id="user_name">{user.username}</span>
        </h4>
        <div>
          <button className="btn-shade" style={{marginBottom:"1rem"}}>
            {" "}
            <NavLink className="nav-item nav-link" to="/cart">
              Edit your cart <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </button>
        </div>
        <div>
          <h5>Edit your profile</h5>
          <div>
            <form onSubmit={handleChange}>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
                <label for="username">Username</label>
              </div>

              <div className="mb-3 form-floating">
                <input
                  type="password"
                  name="lastName"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <label for="password">Password</label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <label for="email">E-mail</label>
              </div>
              <button className="btn-shade mb-5" type="submit">
                Edit Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
