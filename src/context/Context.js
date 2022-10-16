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
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(fetchDataReducer, initialState)

    // console.log('the state:', state);


    // axios(`${DISCOGS_URL}/releases/3235614`)
    // dispatch({ type: 'FETCH_LABEL', payload: label.data.results })

    // call api
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(`${DISCOGS_URL}/database/search?&genre=reggae&year=1980&format=vinyl&token=${DISCOGS_KEY}`)
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data.results })
                // console.log(response.data.results);

            } catch (err) {
                const message = err.message;
                dispatch({ type: 'FETCH_ERROR', payload: message })
            }
        }

        const fetchLabelData = async () => {
            try {
                const response = await axios(`${DISCOGS_URL}/database/search?&style=reggae,dub&format=vinyl&token=${DISCOGS_KEY}`)
                dispatch({ type: 'FETCH_DUB_STYLE', payload: response.data.results })
                // console.log(response.data);

            } catch (err) {
                dispatch({ type: 'FETCH_ERROR', payload: err.message })
            }
        }
        fetchData()
        fetchLabelData()
    }, []);


    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(CartContext);
}

export { AppProvider, CartContext }

