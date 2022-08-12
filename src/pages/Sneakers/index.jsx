import React from 'react';
//redux
import { useSelector } from 'react-redux';
//scss

export default function Sneakers() {
  const sneakers = useSelector((state) => state.cards.currentCard);

  return <div>{sneakers.title}</div>;
}
