import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().min(8).max(20).required(),
  password: yup.string().min(8).max(20).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

export default schema;