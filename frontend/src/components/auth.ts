import * as Yup from "yup";

export const phoneValidation = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
    .required("شماره موبایل الزامی است"),
});


export const otpValidation = Yup.object().shape({
  otp: Yup.string()
    .matches(/^\d{6}$/, "کد OTP باید ۶ رقمی باشد")
    .required("کد OTP الزامی است"),
});
