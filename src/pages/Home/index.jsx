import React from 'react';
//components
import Card from '../../components/Card';
import Category from '../../components/Category';
import Search from '../../components/Search';
import Filter from '../../components/Filter';
//data
import data from '../../data';
//scss
import style from './Home.module.scss';

export default function Home() {
  return (
    <div className={style.root}>
      <h2>All sneakers</h2>
      <div className={style.sort}>
        <Category />
        <div className={style.right}>
          <Search />
          <Filter />
        </div>
      </div>
      <div className={style.content}>
        {data.map((obj) => (
          <Card key={obj.id} item={obj} />
        ))}
      </div>
    </div>
  );
}
