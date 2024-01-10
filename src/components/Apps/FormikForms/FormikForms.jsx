import { useFormik } from "formik";
import React from "react";
import "./FormikForms.scss";

const FormikForms = () => {
  const Form = useFormik({
    // define your form fields and their initial values
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    // define validation logic
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      }
    },

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
          value={Form.values.firstName}
          disabled={Form.isSubmitting}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={Form.handleChange}
          value={Form.values.lastName}
          disabled={Form.isSubmitting}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={Form.handleChange}
          value={Form.values.email}
          disabled={Form.isSubmitting}
        />
        <button type="submit" disabled={Form.isSubmitting}>
          Submit
        </button>
      </form>
      <p>Note: This form built with useFormik hook.</p>
    </div>
  );
};

export default FormikForms;
