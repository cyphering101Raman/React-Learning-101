import React from 'react'

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-medium transition duration-200 ${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
      } text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};


export default Button