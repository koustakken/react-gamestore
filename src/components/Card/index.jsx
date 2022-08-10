import React from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setItem, deleteItem } from '../../redux/cart/reducer';
//scss
import style from './Card.module.scss';
//icons
import { AiOutlineHeart } from 'react-icons/ai';

export default function Card({ item }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);

  const inCart = items.some((el) => el.id === item.id);
  //add to cart
  const handleClick = (e) => {
    e.stopPropagation();
    if (inCart) {
      dispatch(deleteItem(item.id));
    } else {
      dispatch(setItem(item));
    }
  };

  return (
    <div className={style.root}>
      <AiOutlineHeart size={24} />
      <img src={item.imgUrl} alt="sneaker" />
      <h4>{item.title}</h4>
      <h5>Price: {item.price} EUR</h5>
      <button onClick={(e) => handleClick(e)}>{inCart ? 'Remove' : 'Add to cart'}</button>
    </div>
  );
}
