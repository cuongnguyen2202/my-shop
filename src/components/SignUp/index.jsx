import { yupResolver } from "@hookform/resolvers/yup";
import { notification, Space, Spin } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { formSignUpData } from "../../common/Form/StaticForm";
import { useRegister } from "../../redux/hooks/Register";
import { useUsers } from "../../redux/hooks/Users";
import SignUpField from "./SignUpField";
import "./style.scss";

const openNotificationWithIcon = (type, message) => {
  notification[type]({
    message: message,
    duration: 2,
  });
};
// eslint-disable-next-line no-unused-vars
const SignUp = () => {
  const { registers, actions } = useRegister();
  const { users, action } = useUsers();
  // const { actions, products } = useProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    action.getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let userList = users.data;
  console.log(userList);
  const schema = yup.object().shape({
    fullname: yup.string().required("Fullname is required"),
    email: yup.string().required("Email is required").email(),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password at least 6 characters"),
    cfpassword: yup
      .string()
      .required("Confirm Password is Required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref("password")], "Both password need to be the same"),
      }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const { email } = data;
    const checkUser = userList.some((item) => item.email === email);
    if (checkUser) {
      openNotificationWithIcon("error", "Email Already taken");
    } else {
      actions.register(data);
      // tránh đăng ký 2 lần liên tiếp cùng 1 Email
      setTimeout(() => {
        openNotificationWithIcon("success", "Register Successfully");
        action.getUser();
        userList = users.data;
        console.log(userList);
      }, 2500);
    }
  };

  return (
    <div className="signup">
      <form
        className="signup-form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="signup-heading">Sign up</h1>
        {formSignUpData.inputs.map((input, key) => {
          return (
            <SignUpField
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
        <Link to="/signin" className="form-next">
          Already have an account. Login now !
        </Link>
        <button type="submit" className="form-submit">
          Sign up
        </button>
      </form>
      {registers.isLoading && (
        <Space size="middle" className="custom-loading">
          <Spin size="large" />
        </Space>
      )}
    </div>
  );
};

export default SignUp;
