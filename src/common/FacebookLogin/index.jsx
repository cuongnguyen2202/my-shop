import React from "react";
import FacebookLogin from "react-facebook-login";
import { history } from "../../helps/history";

const FacebookLoginField = () => {
  const responseFacebook = (response) => {
    localStorage.setItem("users", JSON.stringify(response));
    history.push("/");
  };
  return (
    <FacebookLogin
      appId="472466077348602"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="custom-btn-facebook"
    />
  );
};

export default FacebookLoginField;
