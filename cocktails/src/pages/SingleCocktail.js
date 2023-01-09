import React from 'react';

import { useParams } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const SingleCocktail = () => {
  const { data } = useAppContext();

  const { cocktail } = useParams();

  // console.log(data);

  return (
    <section className="section">
      {data
        .filter(
          (cockTailData) =>
            parseInt(cockTailData.idDrink) === parseInt(cocktail)
        )
        .map((data) => {
          const {
            idDrink,
            strAlcoholic,
            strCategory,
            strDrink,
            strDrinkThumb,
            strGlass,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          } = data;

          const ing = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          ];

          return (
            <div className="drink" key={idDrink}>
              <img src={strDrinkThumb} alt={strDrink} />
              <div>
                <p>
                  <span className="drink-data">Name</span>
                  {strDrink}
                </p>
                <p>
                  <span className="drink-data">Category</span>
                  {strCategory}
                </p>
                <p>
                  <span className="drink-data">info</span>
                  {strAlcoholic}
                </p>
                <p>
                  <span className="drink-data">glass</span>
                  {strGlass}
                </p>
                <p>
                  <span className="drink-data">instrtuctions</span>
                  {strInstructions}
                </p>
                <p>
                  <span className="drink-data">ingredients</span>
                  {ing.join(', ')}
                </p>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default SingleCocktail;
