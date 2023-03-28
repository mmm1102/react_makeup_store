import Joi from "joi";

const validator = (schema) => (payload) => schema.validate(payload, {
  abortEarly:false
})

const loginSchema = Joi.object({
  firstName:Joi.string().min(2).max(25).required(),
  lastName:Joi.string().min(2).max(25).required(),
  email:Joi.string().email().required(),
  username:Joi.string().min(5).max(20).required(),
  password:Joi.string().min(8).max(20).required(),
  confirmPassword:Joi.ref('password'),
})

export const validateLogin = validator(loginSchema);
