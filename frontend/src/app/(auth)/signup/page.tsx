"use client";

import { otpValidation, phoneValidation } from "@/components/auth";
import { serverUrl } from "@/components/domain";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useFormik } from "formik";
import { useState } from "react";

const postPhoneNumber = async (phoneNumber: string) => {
  try {
    const data = await axios.post(`${serverUrl}/auth/register/step-one/`, {
      phone_number: phoneNumber,
    });
    console.log("Data:", data.data);
    localStorage.setItem("temp_token", data.data.temp_token);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const postOTP = async (otpCode: string) => {
  try {
    const data = await axios.post(`${serverUrl}/auth/register/step-two/`, {
      temp_token: localStorage.getItem("temp_token"),
      otp_code: otpCode,
    });
    console.log("Data:", data.data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const SignupForm = () => {
  const [showOtpForm, setShowOtpForm] = useState(false);

  const phoneFormik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: async (values) => {
      const result = await postPhoneNumber(values.phoneNumber);
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
      if (result?.status === 201) {
        setCookie("refresh", result.data.refresh);
        setCookie("access", result.data.access);
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
        <form onSubmit={otpFormik.handleSubmit}>
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

export default SignupForm;
