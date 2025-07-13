import React from 'react';

const Input = ({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className="w-full mb-4 flex items-center gap-4">
      {label && (
        <label
          htmlFor={id}
          className="w-32 px-2 text-sm text-black font-semibold tracking-wide"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-44 flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default Input;
