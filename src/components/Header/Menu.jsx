import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { cartItemCountSelector } from "../../redux/selectors/Cart";
import { useSelector } from "react-redux";
import Cart from "../Cart";

const Menu = () => {
  const cartItemCount = useSelector(cartItemCountSelector);
  return (
    <section className="menu">
      <div className="container">
        <div className="menu-content">
          <Link className="menu__logo" to="/">
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="menu__logo-item"
              size="5x"
            />
          </Link>
          <div className="menu__search">
            <input type="text" />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="menu__cart">
            <Badge count={cartItemCount} overflowCount={10}>
              <Link to="/checkout">
                <ShoppingCartOutlined className="menu__cart-icon" />
              </Link>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
