import React from "react";

const Button = ({ text, paddingX, paddingY }: any) => {
  return (
    <div>
      <button
        className={`bg-primaryColor text-white rounded-md font-semibold text-sm`}
        style={{
          padding: `${paddingY} ${paddingX}`,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
