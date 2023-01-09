import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useReducer,
} from 'react';

import appReducer, { actionTypes } from './appReducer';
import { useFetch } from './hooks/useFetch';

const initialState = {
  searchText: 'orang',
};
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [{ searchText }, dispatch] = useReducer(appReducer, initialState);
  const { data, isLoading, isError } = useFetch(`${url}${searchText}`);

  const dispatchHandler = (type, payload) => {
    dispatch({
      type,
      payload,
    });
  };

  const setSearchText = (e) => {
    dispatchHandler(actionTypes.searchText, e.target.value);
  };

  const value = {
    data,
    isLoading,
    isError,
    searchText,
    setSearchText,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
