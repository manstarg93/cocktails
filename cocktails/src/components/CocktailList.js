import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = ({ data }) => {
  return (
    <div className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center ">
        {data.map((cocktail) => {
          return <Cocktail key={cocktail.idDrink} {...cocktail} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
