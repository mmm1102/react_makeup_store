import React from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate, Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const MyProfile = () => {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const { id } = useParams();
  const navigate = useNavigate();

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
      if (updateUser) alert("User is updated");
    }
  };
  return (
    <div>
      <h3 className="mb-3">My Profile</h3>
      <p>Hello <span id="user_name">{user.username}</span></p>
      <div>
        <button className="btn btn-outline-warning mb-4">
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
                onChange={(e) => setUser({ ...user, username: e.target.value })}
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
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
            <button className="btn btn-primary mb-5" type="submit">
              Edit Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
