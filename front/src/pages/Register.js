import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
// import schema from "../validation/registerValidationClient";



const Register = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    username: yup.string().min(8).max(20).required(),
    password: yup.string().min(8).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null])
  }) 
  const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(schema),});
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


  // const onErrors = (errors) => console.log(errors);

  return (
    <div className="col-md-4">
      <h3 className="mb-4">Register your account</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            {...register("firstName")}
         
          
          />
          <p>{errors.firstName?.message}</p>
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            {...register("lastName")}
     
          />
          <p>{errors.lastName?.message}</p>
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
            {...register("email")}
       
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            placeholder="Username"
            {...register("username")}
      
          />
          <p>{errors.username?.message}</p>
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password (min 8 characters)"
            {...register("password")}
       
          />
          <p>{errors.password?.message}</p>
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword")}
      
          />
          <p>{errors.confirmPassword && "Passwords should match"}</p>
        </div>

        <button type="submit" className="btn btn-primary mb-5">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
