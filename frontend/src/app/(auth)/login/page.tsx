"use client";

import auth from "@/components/auth";
import { serverUrl } from "@/components/domain";
import { log } from "console";
import { useFormik } from "formik";



// #region test
const Post = async (number:string) => {
  const phoneNumber = {"phone_number": `${number}`};
  
  try {
    const response = await fetch(`${serverUrl}/auth/login/step-one/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(phoneNumber)
    });

    console.log('Status:', response.status);
    
    const data = await response.json();
    console.log('Data:', data);
    
    
    
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
// #endregion

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values.phoneNumber);
      Post(values.phoneNumber);
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
