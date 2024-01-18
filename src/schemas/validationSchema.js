import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(5, "Name should be at least 5 characters"),
  email: Yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .min(5, "Description should be at least 5 characters"),
});

export default validationSchema;
