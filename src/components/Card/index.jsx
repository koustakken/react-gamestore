import React from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setItem, deleteItem } from '../../redux/cart/reducer';
import { setFav, deleteFav } from '../../redux/favorites/reduser';
import { setCurrentCard } from '../../redux/card/reducer';
//router
import { useNavigate } from 'react-router-dom';
//scss
import style from './Card.module.scss';
//icons
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function Card({ item }) {
  //states
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const favorites = useSelector((state) => state.favorites.favItems);

  const inCart = items.some((el) => el.id === item.id);
  const inFav = favorites.some((el) => el.id === item.id);
  //add to cart
  const onCart = () => {
    if (inCart) {
      dispatch(deleteItem(item.id));
    } else {
      dispatch(setItem(item));
    }
  };
  //add to fav
  const onFav = () => {
    if (inFav) {
      dispatch(deleteFav(item.id));
    } else {
      dispatch(setFav(item));
    }
  };

  //toCard
  const navigate = useNavigate();
  const onCard = () => {
    dispatch(setCurrentCard(item));
    navigate(`/sneakers/${item.id}`);
  };

  return (
    <div className={style.root}>
      {inFav ? (
        <AiFillHeart size={24} onClick={onFav} />
      ) : (
        <AiOutlineHeart size={24} onClick={onFav} />
      )}
      <img src={item.imgUrl} alt="sneaker" onClick={onCard} />
      <h4>{item.title}</h4>
      <h5>Price: {item.price} EUR</h5>
      <button onClick={onCart}>{inCart ? 'Remove' : 'Add to cart'}</button>
    </div>
  );
}
