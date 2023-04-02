import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const nav = useNavigate();

  const login = async () => {
    const data = { username: username, password: password };

    try {
      const res = await axios.post("http://localhost:5500/auth/login", data);
      toast.success("Login succesfull!");
      setCookies("access_token", res.data.token);
      window.localStorage.setItem("userID", res.data.userID);
      nav("/");
    } catch (err) {
      if (err.status === 404) {
        toast.warn("User doesn't exist");
      } else {
        toast.warn("Invalid username or password");
      }

      console.error(err);
    }
  };

  return (
    <div className="content d-flex justify-content-sm-center">
      <div className="col-md-4">
        <h3 className="mb-4">Login</h3>
        <div>
          <div className="mb-3">
            <input
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Username"
            />
          </div>

          <div className="mb-3">
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password (min 8 characters)"
            />
          </div>
          <button onClick={login} className="btn-shade mb-5">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
