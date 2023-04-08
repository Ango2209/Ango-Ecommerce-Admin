import React from "react";
import Button from "../components/Button";
import CustomInput from "../components/CustomInput";
import FormInput from "../components/FormInput";
const ForgotPassword = () => {
  return (
    <FormInput
      ip1={"Forgot Password"}
      ip2={"Please enter your register email to get reset password mail"}
    >
      <form>
        <CustomInput type="email" label="Email" id="email" />
        <Button btnText={"Send Email"} />
      </form>
    </FormInput>
  );
};

export default ForgotPassword;
