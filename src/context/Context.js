import { createContext, useContext, useReducer, useEffect } from "react";
import {
  fetchDataReducer,
  initialState,
  filterReducer,
  filterInitialState,
} from "./Reducers";
import axios from "axios";

const AppContext = createContext();

const DISCOGS_URL = process.env.REACT_APP_DISCOGS_URL;
const DISCOGS_KEY = process.env.REACT_APP_DISCOGS_KEY;

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchDataReducer, initialState);
  // console.log("the state:", state);

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );
  // console.log("filter state:", filterState);

  // API call
  const fetchData = async () => {
    try {
      const response = await axios(
        `${DISCOGS_URL}/database/search?&genre=reggae&year=1980&format=vinyl&token=${DISCOGS_KEY}`
      );
      const data = response?.data?.results;

      if (data) {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      }
      // console.log(response.data.results);
    } catch (err) {
      const message = err.message;
      dispatch({ type: "FETCH_ERROR", payload: message });
    }
  };
  const fetchDubData = async () => {
    try {
      const response = await axios(
        `${DISCOGS_URL}/database/search?&style=reggae,dub&format=vinyl&token=${DISCOGS_KEY}`
      );
      const data = response?.data?.results;
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
      const data = response?.data?.results;
      if (data) {
        dispatch({ type: "FETCH_DANCEHALL_STYLE", payload: data });
      }
      // console.log(response.data);
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };
  const fetchSkaData = async () => {
    try {
      const response = await axios(
        `${DISCOGS_URL}/database/search?&style=ska&format=vinyl&token=${DISCOGS_KEY}`
      );
      const data = response?.data?.results;
      if (data) {
        dispatch({ type: "FETCH_SKA_STYLE", payload: data });
      }
      // console.log(response.data);
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    fetchData();
    fetchDubData();
    fetchDancehallData();
    fetchSkaData();
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, dispatch, filterState, filterDispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
