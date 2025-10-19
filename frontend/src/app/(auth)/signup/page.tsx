"use client";

import { otpValidation, phoneValidation } from "@/components/auth";
import { serverUrl } from "@/components/domain";
import axios from "axios";
import { useFormik } from "formik";

// #region fetch first-step
const postPhoneNumber = async (phoneNumber: string) => {
  try {
    const { data } = await axios.post(`${serverUrl}/auth/register/step-one/`, {
      phone_number: phoneNumber,
    });
    console.log("Data:", data);
    localStorage.setItem("temp_token", data.temp_token);
    document.querySelector(".otpFrom")?.classList.remove("hidden");
  } catch (error) {
    console.error("Error:", error);
  }
};
// #endregion
// #region fetch first-step
const postOTP = async (otpCode: string) => {
  try {
    const { data } = await axios.post(`${serverUrl}/auth/register/step-two/`, {
      temp_token: localStorage.getItem("temp_token"),
      otp_code: otpCode,
    });
    console.log("Data:", data);
    localStorage.setItem("temp_token", data.temp_token);
  } catch (error) {
    console.error("Error:", error);
  }
};
// #endregion

const SignupForm = () => {
  const phoneFormik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: (values) => {
      postPhoneNumber(values.phoneNumber);
    },
    validationSchema: phoneValidation,
  });

  const otpFormik = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: (values) => {
      postOTP(values.otp);
    },
    validationSchema: otpValidation,
  });

  return (
    <>
      {/* #region Get_Phone_Number */}
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
      {/* #endregion */}
      {/* #region Get_OTP_Code */}
      <form onSubmit={otpFormik.handleSubmit} className="hidden otpFrom">
        <label htmlFor="otp">OTP Code</label>
        <input
          id="otp"
          name="otp"
          type="tel"
          onChange={otpFormik.handleChange}
          onBlur={otpFormik.handleBlur}
          value={otpFormik.values.otp}
        />
        {otpFormik.touched.otp && otpFormik.errors.otp ? (
          <div style={{ color: "red" }}>{otpFormik.errors.otp}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
      {/* #endregion */}
    </>
  );
};

export default SignupForm;
