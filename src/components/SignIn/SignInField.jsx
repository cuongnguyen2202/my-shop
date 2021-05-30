import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SignInField = (props) => {
  const { register, name, id, placeholder, errors, eye } = props;
  let { type } = props;
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };
  if (type === "password") {
    type = showPassword ? "text" : "password";
  }
  return (
    <div className="form-group">
      <input
        className="form-input"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {eye ? (
        <FontAwesomeIcon
          icon={faEye}
          className="form-icon"
          onClick={toggleShowHidePassword}
        />
      ) : (
        ""
      )}
      {errors && <p className="form-errors">{errors.message}</p>}
    </div>
  );
};

SignInField.propTypes = {};

export default SignInField;
