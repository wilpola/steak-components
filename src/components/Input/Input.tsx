// Creates an Input element
// @author: wilpola

// Set up prop types for params
type Props = {
  type?: string;
  class?: string;
  id?: string;
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
    />
  );
};

// export the Input component
export default Input;
