import React from "react";
import "../styles/components/input.css";

const InputField = ({ fieldText, placeholder, type, star }) => {
  return (
    <div>
      <fieldset className="field">
        <legend className="field_text">
          {fieldText} <span className="star">{star}</span>{" "}
        </legend>
        <input type={type} className="input_text" placeholder={placeholder} />
      </fieldset>
    </div>
  );
};

export default InputField;
