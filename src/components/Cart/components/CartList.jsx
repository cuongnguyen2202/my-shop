import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem';
import {Divider} from 'antd'
import { useSelector } from 'react-redux';
import { cartTotalSelector } from '../../../redux/selectors/Cart';

const CartList = props => {
  const {data} = props
  const totalPrice = useSelector(cartTotalSelector)
  return (

 <>
 <ul className='cart__list'>
   <li className="cart__item title">Image</li>
   <li className="cart__item title">Name</li>
   <li className="cart__item title">Price</li>
   <li className="cart__item title">Quantity</li>
   <li className="cart__item title">Total Price</li>
   <li className="cart__item title">Action</li>
 </ul>
 <Divider/>
  {data &&
        data.map((item, index) => {
          return (
            <>
            <CartItem
              id={item.data.id}
              key={index + 1}
              image={item.data.image}
              price={item.data.price}
              title={item.data.title}
              quantity ={item.data.quantity}
            />
            <Divider/>
            </>
          );
        })}
    <ul className='cart__list'>
   <li className="cart__item cashout">Total</li>
   <li className="cart__item cashout"></li>
   <li className="cart__item cashout"></li>
   <li className="cart__item cashout"></li>
   <li className="cart__item cashout"></li>
   <li className="cart__item cashout">{totalPrice}</li>
 </ul>

 </>
  )

}

CartList.propTypes = {

}

export default CartList
