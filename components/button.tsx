import React from "react";

interface ButtonProps {
  text: string;
  paddingY: string;
  paddingL: string;
  paddingR: string;
  rounded: string;
  backgroundColor?: string; // Optional backgroundColor prop
  outline?: boolean; // Optional outline prop
}

const Button: React.FC<ButtonProps> = ({
  text,
  paddingY,
  paddingL,
  paddingR,
  rounded,
  backgroundColor = "bg-primaryColor",
  outline = false, // Default no outline
}) => {
  return (
    <div>
      <button
        className={`text-white font-semibold text-sm ${rounded} ${backgroundColor} ${
          outline ? "border-[0.1rem] border-textgrayOne" : ""
        }`}
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
