import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cocktail = ({
  strDrink,
  strGlass,
  strAlcoholic,
  strDrinkThumb,
  strInstructions,
  idDrink,
}) => {
  const navigate = useNavigate();
  return (
    <div className=" cocktail   ">
      <img className="img" src={strDrinkThumb} alt={strDrink} />
      <div className="cocktail-footer ">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <button onClick={() => navigate(`/${idDrink}`)} className="btn">
          details
        </button>
      </div>
    </div>
  );
};

export default Cocktail;
