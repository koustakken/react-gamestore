import React from 'react';
//scss
import style from './Card.module.scss';
//icons
import { AiOutlineHeart } from 'react-icons/ai';

export default function Card({ imgUrl, title, price }) {
  return (
    <div className={style.root}>
      <AiOutlineHeart size={24} />
      <img src={imgUrl} alt="sneaker" />
      <h4>{title}</h4>
      <h5>Price: {price} EUR</h5>
      <button>Add to cart</button>
    </div>
  );
}
