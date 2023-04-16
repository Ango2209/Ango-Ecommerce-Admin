import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import FormInput from "../components/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let schema = Yup.object().shape({
    email: Yup.string()
      .email("Email should be valid")
      .required("Email is required"),
    password: Yup.string().required("Password is Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [user, isLoading, isError, isSuccess, message]);

  return (
    <FormInput ip1={"Login"} ip2={"Please Enter Your register email to login"}>
      <form action="" onSubmit={formik.handleSubmit}>
        {" "}
        <CustomInput
          type="text"
          name="email"
          label="Email Address"
          id="email"
          val={formik.values.email}
          onCh={formik.handleChange("email")}
        />
        <div className="error">
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <CustomInput
          type="password"
          name="password"
          label="Password"
          id="pass"
          val={formik.values.password}
          onCh={formik.handleChange("password")}
        />
        <div className="error">
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="mb-3 text-end">
          <Link to="forgot-password" className="">
            Forgot Password?
          </Link>
        </div>
        {message === "Rejected" ? "You are not an admin" : ""}
        <button
          className="border-0 px-3 py-2 text-while fw-bold w-100 w-100 text-center text-decoration-none fs-5"
          style={{ background: "#ffd333" }}
          type="submit"
        >
          Login
        </button>
        <div className="mt-3 mb-3 text-center">
          <Link to="signup" className="">
            You don't have an account
          </Link>
        </div>
      </form>
    </FormInput>
  );
};

export default Login;
