import React from 'react'
import { useCart } from '../../redux/hooks/Cart'
import CartList from './components/CartList';
import './style.scss'

const Cart = () => {
  const {cart, action} = useCart();
  console.log(cart);
  return (
    <div className='cart__wrap'>
    <CartList data={cart}/>
    </div>
  )
}

export default Cart
