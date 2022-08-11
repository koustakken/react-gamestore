import React from 'react';
//redux
import { useSelector } from 'react-redux';
//router
import { Link } from 'react-router-dom';
//icons
import { HiShoppingCart } from 'react-icons/hi';
import { AiFillHeart } from 'react-icons/ai';
//scss
import style from './Header.module.scss';

export default function Header() {
  const count = useSelector((state) => state.cart.cartItems);
  const favCount = useSelector((state) => state.favorites.favItems);
  return (
    <div className={style.root}>
      <Link to="/">
        <h2>redux sneakers</h2>
      </Link>
      <div className={style.side}>
        <Link to="/favorites">
          <div className={style.favorite}>
            <AiFillHeart size={24} />
            {favCount.length > 0 ? <span className={style.count}>{favCount.length}</span> : null}
          </div>
        </Link>
        <Link to="/cart">
          <div className={style.cart}>
            <HiShoppingCart size={24} />
            {count.length > 0 ? <span className={style.count}>{count.length}</span> : null}
          </div>
        </Link>
      </div>
    </div>
  );
}
