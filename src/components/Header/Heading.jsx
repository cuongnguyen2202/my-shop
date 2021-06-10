import { Avatar, Button, Dropdown, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { history } from "../../helps/history";

const logout = () => {
  localStorage.removeItem("users");
  history.push("signin");
};
const Heading = () => {
  const loggedIn = JSON.parse(localStorage.getItem("users"));
  // co email la dang nhap r chua co email thi chua dang nhap
  const isLoggedIn = loggedIn ? true : false;
  const menu = (
    <Menu className="heading__menu">
      <Menu.Item key="0">
        {loggedIn && (
          <>
            <Avatar className="avatar">
              {loggedIn.email[0].toUpperCase()}
            </Avatar>
            <span className="heading__mail">{loggedIn.email}</span>
          </>
        )}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" className="heading__menu-item">
        <Button
          type="primary"
          danger
          onClick={logout}
          className="heading__logout"
        >
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
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
