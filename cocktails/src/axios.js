import axios from 'axios';

export const axiosCustom = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  headers: {
    Accept: 'application/json',
    //Authorizatio: 'token'
  },
});
