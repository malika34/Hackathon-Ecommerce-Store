import React from "react";

const Button = ({ text, paddingY, paddingL, paddingR, rounded }: any) => {
  return (
    <div>
      <button
        className={`bg-primaryColor text-white font-semibold text-sm ${rounded}`}
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
          paddingLeft: paddingL,
          paddingRight: paddingR,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
