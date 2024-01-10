import { useFormik } from "formik";
import React from "react";


const FormikForms = () => {

    const Form = useFormik({
        // define your form fields and their initial values
        initialValues : {
            firstName: "",
            lastName: "",
            email: "",
        },
        // define validation logic
    })
  return (
    <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" />
    </form>
  );
};

export default FormikForms;
