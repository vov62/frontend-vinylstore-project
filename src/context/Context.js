import { createContext, useContext, useReducer, useEffect } from 'react';
import fetchDataReducer from './Reducers'
import axios from 'axios';

const CartContext = createContext();

const DISCOGS_URL = process.env.REACT_APP_DISCOGS_URL;
const DISCOGS_KEY = process.env.REACT_APP_DISCOGS_KEY;

const initialState = {
    loading: true,
    error: '',
    data: [],
    dubData: [],
    cart: [],
    singleVinyl: []
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(fetchDataReducer, initialState)
    // console.log('the state:', state);

    // API call
    const fetchData = async () => {
        try {
            const response = await axios(`${DISCOGS_URL}/database/search?&genre=reggae&year=1980&format=vinyl&token=${DISCOGS_KEY}`)
            const data = response.data.results

            if (data) {
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
            }
            // console.log(response.data.results);

        } catch (err) {
            const message = err.message;
            dispatch({ type: 'FETCH_ERROR', payload: message })
        }
    }

    const fetchLabelData = async () => {
        try {
            const response = await axios(`${DISCOGS_URL}/database/search?&style=reggae,dub&format=vinyl&token=${DISCOGS_KEY}`)
            const data = response.data.results
            if (data) {
                dispatch({ type: 'FETCH_DUB_STYLE', payload: data })
            }
            // console.log(response.data);

        } catch (err) {
            dispatch({ type: 'FETCH_ERROR', payload: err.message })
        }
    }

    useEffect(() => {
        fetchData()
        fetchLabelData()
    }, []);


    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

// custom hook
export const useGlobalContext = () => {
    return useContext(CartContext);
}

export { AppProvider, CartContext }

