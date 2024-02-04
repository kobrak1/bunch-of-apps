import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./FormikForms.scss";

// define validation logic
const validationSchema = Yup.object({
  firstName: Yup.string("it should be string").required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  email: Yup.string().email("Invalid email address").required("Email is required!"),
});

const FormikForms = () => {
  const Form = useFormik({
    // define your form fields and their initial values
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    // define validation logic
    validationSchema: validationSchema,

    // the function that handle the submit
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values);
      bag.resetForm();
    },
  });
  return (
    <div className="user-registration-form">
      <h2>User Registration Form</h2>
      <form onSubmit={Form.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={Form.handleChange}
          onBlur={Form.handleBlur}
          value={Form.values.firstName}
          disabled={Form.isSubmitting}
        />
        {Form.touched.firstName && Form.errors.firstName && (
          <div className="error" style={{ color: "red" }}>
            {Form.errors.firstName}
          </div>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={Form.handleChange}
          onBlur={Form.handleBlur}
          value={Form.values.lastName}
          disabled={Form.isSubmitting}
        />
        {Form.touched.lastName && Form.errors.lastName && (
          <div className="error" style={{ color: "red" }}>
            {Form.errors.lastName}
          </div>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={Form.handleChange}
          onBlur={Form.handleBlur}
          value={Form.values.email}
          disabled={Form.isSubmitting}
        />
        {Form.touched.email && Form.errors.email && (
          <div className="error" style={{ color: "red" }}>
            {Form.errors.email}
          </div>
        )}
        <button type="submit" disabled={Form.isSubmitting}>
          Submit
        </button>
      </form>
      <p>Note: This form built with useFormik hook.</p>
    </div>
  );
};

export default FormikForms;
