import React from 'react';
//redux
import { useSelector } from 'react-redux';
//router
import { Link } from 'react-router-dom';
//icons
import { HiShoppingCart } from 'react-icons/hi';
//scss
import style from './Header.module.scss';

export default function Header() {
  const count = useSelector((state) => state.cart.cartItems);
  return (
    <div className={style.root}>
      <Link to="/">
        <h2>redux sneakers</h2>
      </Link>
      <Link to="/cart">
        <div className={style.cart}>
          <HiShoppingCart size={24} />
          {count.length > 0 ? <span className={style.count}>{count.length}</span> : null}
        </div>
      </Link>
    </div>
  );
}
