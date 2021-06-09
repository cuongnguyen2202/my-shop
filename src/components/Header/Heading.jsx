import { Dropdown, Button, Avatar, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { history } from "../../helps/history";

const { Meta } = Card;
const logout = () => {
  localStorage.removeItem("users");
  history.push("signin");
};
const menu = (
  <Card
    style={{ width: 300, height: 100, padding: 20 }}
    className="header__info"
  >
    <Meta
      avatar={
        <Avatar>
          {" "}
          {JSON.parse(localStorage.getItem("users"))
            ? JSON.parse(localStorage.getItem("users")).email[0].toUpperCase()
            : ""}
        </Avatar>
      }
      description={
        JSON.parse(localStorage.getItem("users"))
          ? JSON.parse(localStorage.getItem("users")).email
          : ""
      }
    />
    <Button type="primary" className="header__logout" onClick={logout}>
      Logout
    </Button>
  </Card>
);
const Heading = () => {
  const loggedIn = JSON.parse(localStorage.getItem("users"));
  console.log(loggedIn);
  // co email la dang nhap r chua co email thi chua dang nhap
  const isLoggedIn = loggedIn ? true : false;
  return (
    <header className="heading">
      <div className="container">
        <div className="heading__content">
          <div className="heading__left">
            <p className="heading__item">PHONE: XXXXXXXXX</p>
            <p className="heading__item">EMAIL: XXXXXXXXX</p>
          </div>
          <div className="heading__right">
            {!isLoggedIn && (
              <Link to="/signin" className="heading__item">
                LogIn
              </Link>
            )}
            {isLoggedIn && (
              <Dropdown overlay={menu} trigger={["click"]}>
                <Avatar className="avatar-btn">
                  {loggedIn.email[0].toUpperCase()}
                </Avatar>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Heading;
