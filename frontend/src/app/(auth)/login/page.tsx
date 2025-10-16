"use client";

import auth from "@/components/auth";
import { useFormik } from "formik";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: auth,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phoneNumber}
      />
      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
        <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
