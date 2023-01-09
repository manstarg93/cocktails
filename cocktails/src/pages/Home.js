import React from 'react';

import CocktailList from '../components/CocktailList';
import Loading from '../components/Loading';
import SearchForm from '../components/SearchForm';
import { useAppContext } from '../hooks/useAppContext';

const Home = () => {
  const { data, isLoading, isError } = useAppContext();
  return (
    <section className="section">
      <SearchForm />
      {isLoading && <Loading />}
      {isError && <p>Error</p>}

      {data ? (
        <>
          <section className="cocktail-section">
            <CocktailList data={data} />
          </section>
        </>
      ) : (
        <h4 className="section-title">Drink does not exist</h4>
      )}
    </section>
  );
};

export default Home;
