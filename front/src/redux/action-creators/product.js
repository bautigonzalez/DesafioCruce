import axios from "axios"
import { SET_PRODUCTS } from "../constants"

const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        products,
    }
}

export const fetchProducts = () => (dispatch) =>
    axios.get(`/api/products`).then(res => dispatch(setProducts(res.data)))
