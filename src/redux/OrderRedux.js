import axios from 'axios';
import { api } from '../settings';

/* thunk creators */
export const getOrderFromAPI  = id => {
  //return (dispatch, getSate) => {
  axios
    .get(`${api.url}/${api.order}/${id}`)
    .then(({data}) => {
      return data;
    }
    );
  //};
};