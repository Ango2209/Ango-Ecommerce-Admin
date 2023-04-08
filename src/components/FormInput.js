import React from "react";

const FormInput = ({ ip1, ip2, btnText, children }) => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">{ip1}</h3>
        <p className="text-center">{ip2}</p>

        {children}
      </div>
    </div>
  );
};

export default FormInput;
