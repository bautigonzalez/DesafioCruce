import axios from "axios"
import { SET_PRODUCTS, SET_PRODUCT } from "../constants"

const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        products,
    }
}

const setProduct = (product) => {
    return {
        type: SET_PRODUCT,
        product,
    }
}

export const fetchProducts = () => (dispatch) =>
    axios.get(`/api/products`).then(res => dispatch(setProducts(res.data)))

export const fetchProduct = (id) => (dispatch) =>
    axios.get(`/api/products/${id}`).then(res => dispatch(setProduct(res.data)))

export const addProduct = (image, name, price, discount, stock) => (dispatch) =>
    axios.post("/api/products", {image, name, price, discount, stock})

export const editProduct = (id, image, name, price, discount, stock) => (dispatch) =>
    axios.put(`/api/products/${id}`, {image, name, price, discount, stock})

export const deleteProduct = (id) => (dispatch) =>
    axios.delete(`/api/products/${id}`).then(res => dispatch(setProducts(res.data)))