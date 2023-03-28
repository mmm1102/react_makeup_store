import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().min(2).max(25).matches(/[A-Z][a-zA-Z]+/, 'first letter should be uppercase').required(),
  lastName: yup.string().min(2).max(25).matches(/[A-Z][a-zA-Z]+/, 'first letter should be uppercase').required(),
  email: yup.string().email().required(),
  username: yup.string().min(5).max(20).matches(/[a-z]/, 'at least one lowercase char')
  .matches(/[A-Z]/, 'at least one uppercase char')
  .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least one number or special char (@,!,#, etc).').required(),
  password: yup.string().min(8).max(20).matches(/[a-z]/, 'at least one lowercase char')
  .matches(/[A-Z]/, 'at least one uppercase char')
  .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least one number or special char (@,!,#, etc).').required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
}) 

export default schema;