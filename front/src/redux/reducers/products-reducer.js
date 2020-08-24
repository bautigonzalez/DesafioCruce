import { SET_PRODUCTS } from '../constants';

const initialState = { 
  products: [],
 };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS: 
       return {...state, products: action.products};
    default: 
       return state;
  }
}