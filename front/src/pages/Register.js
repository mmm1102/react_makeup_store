import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();

  const onFormSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5500/auth/register", data);
      alert("radi registracija")
      console.log(res.data); //json poruka sa servera
      nav("/login");
    } catch (err) {
      console.error(err);
    }
    console.log(data); // objekat sa forme
  };


  const onErrors = (errors) => console.log(errors);

  return (
    <div className="col-md-4">
      <h3 className="mb-4">Register your account</h3>
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <div className="mb-3">
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            {...register("firstName")}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            {...register("lastName")}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
            {...register("email")}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            placeholder="Username"
            {...register("username")}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password (min 8 characters)"
            {...register("password")}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword")}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mb-5">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
