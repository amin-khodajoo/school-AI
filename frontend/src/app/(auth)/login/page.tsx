"use client";

import { otpValidation, phoneValidation } from "@/components/auth";
import { serverUrl } from "@/components/domain";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useFormik } from "formik";
import { useState } from "react";   

const postPhoneNumber = async (phoneNumber: string) => {
  try {
    const res = await axios.post(`${serverUrl}/auth/login/step-one/`, {
      phone_number: phoneNumber,
    });
    localStorage.setItem("temp_token", res.data.temp_token);
    return res;
  } catch (error) {
    console.error("Error:", error);
  }
};

const postOTP = async (otpCode: string) => {
  try {
    const res = await axios.post(`${serverUrl}/auth/login/step-two/`, {
      temp_token: localStorage.getItem("temp_token"),
      otp_code: otpCode,
    });
    return res;
  } catch (error) {
    console.error("Error:", error);
  }
};

const LoginForm = () => {
  const [showOtpForm, setShowOtpForm] = useState(false);

  const phoneFormik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: async (values) => {
      const result = await postPhoneNumber(values.phoneNumber);
       console.log(result?.data)
      if (result) {
        setShowOtpForm(true); 
      }
    },
    validationSchema: phoneValidation,
  });

  const otpFormik = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: async (values) => {
      const result = await postOTP(values.otp);
     console.log(result?.data)
      if(result?.status === 200){
        setCookie("refresh" , result.data.refresh)
        setCookie("access" , result.data.access)
      }
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
      {showOtpForm && (
        <form onSubmit={otpFormik.handleSubmit} className="otpFrom">
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
      )}
      {/* #endregion */}
    </>
  );
};

export default LoginForm;