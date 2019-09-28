import React from "react";

const SurveyField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <input style={{ marginBottom: "5px" }} {...input} type="text" />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
