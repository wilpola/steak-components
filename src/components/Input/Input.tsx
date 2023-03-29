// Creates an Input element
// @author: wilpola

// Import styles
import "./input.css";

// Set up prop types for params
interface Props {
  type?: 'text' | 'password' | 'number' | 'email';
  class?: string;
  id?: string;
  placeholder?: string;
};

// Import Modules
import React, { useState } from "react";

// Code for the component
const Input = (params: Props) => {
  const [value, setValue] = useState<string>("");

  // compile the component
  return (
    <input
      className={`input ${params.class}`}
      id={params.id}
      type={params.type || "text"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={params.placeholder || "Enter text.."}
    />
  );
};

// export the Input component
export default Input;
