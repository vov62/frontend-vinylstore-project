import { createContext, useContext, useReducer, useEffect } from "react";
import { fetchDataReducer, initialState } from "./Reducers";
import axios from "axios";

const CartContext = createContext();

const DISCOGS_URL = process.env.REACT_APP_DISCOGS_URL;
const DISCOGS_KEY = process.env.REACT_APP_DISCOGS_KEY;

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchDataReducer, initialState);
  console.log("the state:", state);

  // API call
  const fetchData = async () => {
    try {
      const response = await axios(
        `${DISCOGS_URL}/database/search?&genre=reggae&year=1980&format=vinyl&token=${DISCOGS_KEY}`
      );
      const data = response.data.results;

      if (data) {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      }
      // console.log(response.data.results);
    } catch (err) {
      const message = err.message;
      dispatch({ type: "FETCH_ERROR", payload: message });
    }
  };
  const fetchLabelData = async () => {
    try {
      const response = await axios(
        `${DISCOGS_URL}/database/search?&style=reggae,dub&format=vinyl&token=${DISCOGS_KEY}`
      );
      const data = response.data.results;
      if (data) {
        dispatch({ type: "FETCH_DUB_STYLE", payload: data });
      }
      // console.log(response.data);
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };
  const fetchDancehallData = async () => {
    try {
      const response = await axios(
        `${DISCOGS_URL}/database/search?&style=dancehall&format=vinyl&token=${DISCOGS_KEY}`
      );
      const data = response.data.results;
      if (data) {
        dispatch({ type: "FETCH_DANCEHALL_STYLE", payload: data });
      }
      // console.log(response.data);
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    fetchData();
    fetchLabelData();
    fetchDancehallData();
  }, []);

  const addToCart = (product) => {
    const updatedCart = state.cart.concat(product);
    dispatch({
      type: "ADD_TO_CART",
      payload: { cart: updatedCart },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.cart.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { cart: updatedCart },
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((produce) => {
      total += produce.price;
    });
    dispatch({
      type: "UPDATE_PRICE",
      payload: { total },
    });
  };

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(CartContext);
};

export { AppProvider, CartContext };
