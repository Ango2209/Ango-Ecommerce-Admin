import React from "react";
import Button from "../components/Button";
import CustomInput from "../components/CustomInput";
import FormInput from "../components/FormInput";

const ResetPassword = () => {
  return (
    <FormInput ip1={"Reset Password"} ip2={"Please Enter Your new password"}>
      <form>
        <CustomInput type="text" label="Email Address" id="email" />
        <CustomInput type="password" label="Password" id="pass" />
        <Button btnText={"Reset Password"} />
      </form>
    </FormInput>
  );
};

export default ResetPassword;
