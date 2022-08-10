import React from 'react';
//components
import Card from '../../components/Card';
//data
import data from '../../data';
//scss
import style from './Home.module.scss';

export default function Home() {
  return (
    <div className={style.root}>
      <h2>All sneakers</h2>
      <div className={style.content}>
        {data.map((obj) => (
          <Card key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}
