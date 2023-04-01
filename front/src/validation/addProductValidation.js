import * as yup from "yup";

const schema = yup.object().shape({
  productName: yup
    .string()
    .min(2)
    .max(25)
    .matches(/[A-Z][a-zA-Z]+/, "first letter should be uppercase")
    .required(),
  brand: yup
    .string()
    .min(2)
    .max(25)
    .matches(/[A-Z][a-zA-Z]+/, "first letter should be uppercase")
    .required(),

  category: yup.string().min(3).max(20).required(),
  price: yup.number().min(1).required(),
  img: yup.mixed().test("required", "Please select a file", value => {
    return value && value.length;
  })
});

export default schema;
