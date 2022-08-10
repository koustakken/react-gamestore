import React from 'react';
//router
import { Link } from 'react-router-dom';
//icons
import { HiShoppingCart } from 'react-icons/hi';
//scss
import style from './Header.module.scss';

export default function Header() {
  return (
    <div className={style.root}>
      <Link to="/">
        <h2>redux sneakers</h2>
      </Link>
      <Link to="/cart">
        <HiShoppingCart size={24} />
      </Link>
    </div>
  );
}
