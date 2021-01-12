import axios from 'axios';
import React, { useReducer } from 'react';
import { JSON_API } from '../helpers/constants';
import { calcSubPrice, calcTotalPrice } from '../helpers/CalcPrice'

export const adminContext = React.createContext();

const INIT_STATE = {
    tours: [],
    toursToEdit: null,
    toursCountInCart: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).tours.length : 0,
    cartData: [],
    searchTours: [],
    totalCount: 0
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_TOURS_DATA":
            return { ...state, tours: action.payload }
        case "EDIT_TOUR":
            return { ...state, toursToEdit: action.payload }
        case "ADD_AND_DELETE_PRODUCT_IN_CART":
            return { ...state, toursCountInCart: action.payload }
        case "GET_CART":
            return { ...state, cartData: action.payload }
        case "GET_SEARCH":
            return { ...state, searchTours: action.payload }
        case "SET_TOTAL_COUNT":
            return { ...state, totalCount: action.payload }

        default:
            return state
    }
}

const AdminContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function addTours(newTours) {
        await axios.post(`${JSON_API}/tours`, newTours)
        getTours()
    }

    async function getTours() {
        let params = (window.location.search.replace(/%3D/g, ''))

        if (!params) params = "?_limit=4";
        console.log(params)
        let params1 = decodeURI(params)
        let { data, headers } = await axios(`${JSON_API}/tours${params}`)
        console.log(data)
        dispatch({
            type: "GET_TOURS_DATA",
            payload: data
        })

        dispatch({
            type: "SET_TOTAL_COUNT",
            payload: headers["x-total-count"],
        });
    }

    async function deleteTour(id) {
        await axios.delete(`${JSON_API}/tours/${id}`)
        getTours()
    }

    async function editTours(id) {
        let { data } = await axios(`${JSON_API}/tours/${id}`)
        dispatch({
            type: "EDIT_TOUR",
            payload: data
        })
    }

    async function saveTour(newTour) {
        axios.patch(`${JSON_API}/tours/${newTour.id}`, newTour)
    }

    function addAndDeleteTourInCart(tour) {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            cart = {
                tours: [],
                totalPrice: 0
            }
        }
        let newTour = {
            tour: tour,
            count: 1,
            subPrice: 0
        }
        newTour.subPrice = calcSubPrice(newTour)

        let newCart = cart.tours.filter(item => item.tour.id === tour.id)
        if (newCart.length > 0) {
            cart.tours = cart.tours.filter(item => item.tour.id !== tour.id)
        } else {
            cart.tours.push(newTour)
        }
        cart.totalPrice = calcTotalPrice(cart.tours)
        localStorage.setItem("cart", JSON.stringify(cart))
        dispatch({
            type: "ADD_AND_DELETE_PRODUCT_IN_CART",
            payload: cart.tours.length
        })
    }
    function checkTourInCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            cart = {
                tours: [],
                totalPrice: 0
            }
        }
        let newCart = cart.tours.filter(item => item.product.id === id)
        return newCart.length > 0 ? true : false
    }

    function getCart() {
        let cart = JSON.parse(localStorage.getItem("cart"))
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    function makeOrder() {
        let cart = JSON.parse(localStorage.getItem("cart"))
    }

    function changeCountTour(count, id) {
        let cart = JSON.parse(localStorage.getItem("cart"))
        cart.tours = cart.tours.map(item => {
            if (item.tour.id === id) {
                item.count = count
                item.subPrice = calcSubPrice(item)
            }
            return item
        })
        cart.totalPrice = calcTotalPrice(cart.tours)
        localStorage.setItem("cart", JSON.stringify(cart))
        getCart()
    }

    const deleteFromCart = async (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.tours = cart.tours.filter(item => item.tour.id !== id)
        localStorage.setItem("cart", JSON.stringify(cart))
        dispatch({
            type: "ADD_AND_DELETE_PRODUCT_IN_CART",
            payload: cart.tours.length
        })
        getCart()
      };
    return (
        <adminContext.Provider value={{
            tours: state.tours,
            toursToEdit: state.toursToEdit,
            cartData: state.cartData,
            searchTours: state.searchTours,
            totalCount: state.totalCount,
            toursCountInCart: state.toursCountInCart,
            getTours,
            addTours,
            deleteTour,
            editTours,
            saveTour,
            addAndDeleteTourInCart,
            changeCountTour,
            getCart,
            checkTourInCart,
            makeOrder,
            deleteFromCart
        }}>
            {children}
        </adminContext.Provider>
    );
};

export default AdminContextProvider;