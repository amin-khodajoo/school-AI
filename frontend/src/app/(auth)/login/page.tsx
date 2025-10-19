"use client";

import auth from "@/components/auth";
import { serverUrl } from "@/components/domain";
import axios from "axios";
import { useFormik } from "formik";

const postPhoneNumber = async (phoneNumber: string) => {
  try {
    const { data } = await axios.post(`${serverUrl}/auth/login/step-one/`, {
      phone_number: phoneNumber,
    });

    console.log(data)
    console.log("Status:", data.status);
  } catch (error) {
    console.error("Error:", error);
  }
};

const postOTP = () => {};

const LoginForm = () => {
  const phoneFormik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values.phoneNumber);
      postPhoneNumber(values.phoneNumber);
    },
    validationSchema: auth,
  });

  const phoneFormik = useFormik({
    initialValues: {
      otpCode: "",
    },
    onSubmit: (values) => {
      console.log(values.otpCode);
      postPhoneNumber(values.otpCode);
    },
    validationSchema: 
  });

  return (
    <form onSubmit={phoneFormik.handleSubmit}>
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        onChange={phoneFormik.handleChange}
        onBlur={phoneFormik.handleBlur}
        value={phoneFormik.values.phoneNumber}
      />
      {phoneFormik.touched.phoneNumber && phoneFormik.errors.phoneNumber ? (
        <div style={{ color: "red" }}>{phoneFormik.errors.phoneNumber}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
