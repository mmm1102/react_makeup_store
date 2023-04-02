import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import schema from "../validation/registerValidationClient";



const Register = () => {

  const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(schema),});
  const nav = useNavigate();

  const onFormSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5500/auth/register", data);
      toast.success("Registration succesfull!");
   
      console.log(res.data);
      nav("/login");
    } catch (err) {
      toast.warn("")
      console.error(err);
    }
    console.log(data);
  };


  return (
    <div className="content d-flex justify-content-sm-center">
    <div className="col-md-4">
      <h3 className="mb-4">Register your account</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-2">
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            {...register("firstName")}
         
          
          />
          <p className="err_msg">{errors.firstName?.message}</p>
        </div>

        <div className="mb-2">
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            {...register("lastName")}
     
          />
          <p className="err_msg">{errors.lastName?.message}</p>
        </div>

        <div className="mb-2">
          <input
            type="text"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
            {...register("email")}
       
          />
          <p className="err_msg">{errors.email?.message}</p>
        </div>

        <div className="mb-2">
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            placeholder="Username"
            {...register("username")}
      
          />
          <p className="err_msg">{errors.username?.message}</p>
        </div>

        <div className="mb-2">
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password (min 8 characters)"
            {...register("password")}
       
          />
          <p className="err_msg">{errors.password?.message}</p>
        </div>

        <div className="mb-2">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword")}
      
          />
          <p className="err_msg">{errors.confirmPassword && "Passwords should match"}</p>
        </div>

        <button type="submit" className="btn-shade mb-5">
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default Register;
