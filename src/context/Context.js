import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

const initialState = {
    loading: true,
    error: '',
    data: {},
    cart: [],
}
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                data: {},
                error: action.payload
            }
        default:
            return state
    }
}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    // call api
    useEffect(() => { }, []);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const CartState = () => {
    return useContext(CartContext);
}

export default Context

