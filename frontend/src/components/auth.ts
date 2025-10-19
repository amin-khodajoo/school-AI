import * as Yup from "yup";

const auth = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
    .required("شماره موبایل الزامی است"),
});

const otpValidation = Yup.object().shape({
  
})

export default auth;


