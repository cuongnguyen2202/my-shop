import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useCart } from "../../../redux/hooks/Cart";
const CartItem = (props) => {
  const { id, title, image, price } = props;
  let { quantity } = props;
  const { action } = useCart();
  let [newQuantity, setQuantity] = useState(quantity);
  const [data, setData] = useState({ id, newQuantity });
  const total = Number(price) * Number(newQuantity);
  const decreaseQuantity = () => {
    if (newQuantity <= 1) {
      setQuantity((newQuantity = 1));
    } else {
      setQuantity(newQuantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(newQuantity + 1);
  };

  useEffect(() => {
    setData({ ...data, newQuantity });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newQuantity]);
  useEffect(() => {
    action.setQuantity({ ...data });
  });
  const removeItem = () => {
    action.removeFromCart(id);
  }



  return (
    <ul className="cart__list">
      <li className="cart__item">
        <img src={image} alt="" className="cart__img" />
      </li>
      <li className="cart__item">
        <p className="cart__title">{title}</p>
      </li>

      <li className="cart__item">
        {" "}
        <p className="cart__price">{price}</p>
      </li>
      <li className="cart__item">
        <div className="cart__quantity">
          <button onClick={decreaseQuantity}> - </button>

          <p>{newQuantity}</p>
          <button onClick={increaseQuantity}> + </button>
        </div>
      </li>
      <li className="cart__item">
        {" "}
        <p className="cart__total">{total}$</p>
      </li>
      <li className="cart__item">
        <Button type="primary" danger onClick={removeItem}>
          Remove
        </Button>
      </li>
    </ul>
  );
};

CartItem.propTypes = {};

export default CartItem;
