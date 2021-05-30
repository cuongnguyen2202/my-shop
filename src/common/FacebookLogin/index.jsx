import React from "react";
import FacebookLogin from "react-facebook-login";
import { history } from "../../helps/history";

const FacebookLoginField = () => {
  const responseFacebook = (response) => {
    localStorage.setItem("users", response);
    history.push("/");
  };
  return (
    <FacebookLogin
      appId="472466077348602"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="custom-btn-facebook"
    />
  );
};

export default FacebookLoginField;
