import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { register, resetState } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Email should be valid")
      .required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number should be valid")
      .required("Mobile number is required"),
    password: Yup.string()
      .min(8, "Password should be at least 8 characters")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        formik.setFieldError("confirmPassword", "Passwords must match");
      } else {
        dispatch(register(values));
      }
    },
  });

  const { newUser, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      dispatch(resetState());
    }
  }, [newUser, isLoading, isError, isSuccess, message]);

  return (
    <FormInput ip1={"Signup"} ip2={"Please Enter Your information to signup"}>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="firstName"
            label="First Name"
            id="firstName"
            val={formik.values.firstName}
            onCh={formik.handleChange}
          />
          <div className="error">
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>
          <CustomInput
            type="text"
            name="lastName"
            label="Last Name"
            id="lastName"
            val={formik.values.lastName}
            onCh={formik.handleChange}
          />
          <div className="error">
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </div>
          <CustomInput
            type="text"
            name="email"
            label="Email Address"
            id="email"
            val={formik.values.email}
            onCh={formik.handleChange}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput
            type="text"
            name="mobile"
            label="Mobile Number"
            id="mobile"
            val={formik.values.mobile}
            onCh={formik.handleChange}
          />
          <div className="error">
            {formik.touched.mobile && formik.errors.mobile ? (
              <div>{formik.errors.mobile}</div>
            ) : null}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            id="pass"
            val={formik.values.password}
            onCh={formik.handleChange}
          />
          <div className="error">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <CustomInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            id="confirmPassword"
            val={formik.values.confirmPassword}
            onCh={formik.handleChange}
          />
          <div className="error">
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <button
            className="mt-3 border-0 px-3 py-2 text-while fw-bold w-100 w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </FormInput>
  );
};

export default Register;
