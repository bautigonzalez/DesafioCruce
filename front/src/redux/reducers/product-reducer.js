import { SET_PRODUCTS, SET_PRODUCT } from '../constants';

const initialState = { 
  products: [],
  product: {}
 };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS: 
       return {...state, products: action.products};
    case SET_PRODUCT: 
       return {...state, product: action.product};
    default: 
       return state;
  }
}