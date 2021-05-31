import React, { useEffect, useState } from "react";
import SignInField from "./SignInField";
import { formSignInData } from "../../common/Form/StaticForm";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import "./style.scss";
import { useUsers } from "../../redux/hooks/Users";
import { Spin, Space, notification } from "antd";
import { history } from "../../helps/history";
import FacebookLoginField from "../../common/FacebookLogin";

const openNotificationWithIcon = (type, message) => {
  notification[type]({
    message: message,
    duration: 2,
  });
};

// eslint-disable-next-line no-unused-vars
const SignIn = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // Call API lat ve danh sach User
  const { users, action } = useUsers();
  useEffect(() => {
    action.getUser();
  }, []);
  let userList = users.data;
  // state loading cho login
  const [loading, setLoading] = useState(false);
  // Submit check email va password
  const onSubmit = (data) => {
    const { email, password } = data;
    setLoading(true);
    // lấy ra email
    const checkEmail = userList.filter((users) => users.email === email);
    // mail là unique nên so sánh vs 1 xong checkpass, setTimeOut cho co hieu ung
    setTimeout(() => {
      if (checkEmail.length === 1) {
        if (checkEmail[0].password === password) {
          setLoading(false);
          localStorage.setItem("user", JSON.stringify(data));
          openNotificationWithIcon("success", "Welcome to my shop");
          history.push("/");
        } else {
          openNotificationWithIcon("error", "Password is wrong");
          setLoading(false);
        }
      } else {
        openNotificationWithIcon("error", "Email is wrong");
        setLoading(false);
      }
    }, 2000);
  };
  return (
    <div className="signup">
      <form
        className="signup-form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="signin-heading">Login</h1>
        <FacebookLoginField />
        <div className="signup-or">
          <span className="signup-or-text">Or</span>
        </div>
        {formSignInData.inputs.map((input, key) => {
          return (
            <SignInField
              key={key + 1}
              type={input.type}
              id={input.id}
              placeholder={input.placeholder}
              name={input.name}
              register={register}
              errors={errors[input.name]}
              eye={input.eye}
            />
          );
        })}
        <Link to="/signup" className="form-next">
          Don't have a account? Create now!
        </Link>
        <button type="submit" className="form-submit">
          Login
        </button>
      </form>
      {loading ? (
        <Space size="middle" className="custom-loading">
          <Spin size="large" />
        </Space>
      ) : (
        ""
      )}
    </div>
  );
};

export default SignIn;
