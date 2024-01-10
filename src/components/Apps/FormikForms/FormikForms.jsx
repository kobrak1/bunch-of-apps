import { Formik, useFormik } from "formik";
import React from "react";

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
  );
};

export default FormikForms;
