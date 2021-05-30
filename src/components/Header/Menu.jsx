import {
  faSearch,
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
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
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="2x"
              className="menu__cart-icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
