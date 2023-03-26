import Joi from "joi";

const validator = (schema) => (payload) => schema.validate(payload, {
  abortEarly:false
})

const loginSchema = Joi.object({
  firstName:Joi.string().min(3).max(12).required(),
  lastName:Joi.string().min(3).max(12).required(),
  email:Joi.string().email().required(),
  username:Joi.string().min(3).max(12).required(),
  password:Joi.string().min(3).max(10).required(),
  confirmPassword:Joi.ref('password'),
})

export const validateLogin = validator(loginSchema);
