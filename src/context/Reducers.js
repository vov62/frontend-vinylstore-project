export const initialState = {
  loading: true,
  error: "",
  data: [],
  dubData: [],
  dancehallData: [],
  singleVinyl: [],
  cart: [],
  wishlist: [],
  images: [],
  searchVinylResults: [],
};

export const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case "FETCH_DUB_STYLE":
      return {
        ...state,
        loading: false,
        dubData: action.payload,
        error: "",
      };
    case "FETCH_DANCEHALL_STYLE":
      return {
        ...state,
        loading: false,
        dancehallData: action.payload,
        error: "",
      };
    case "FETCH_SINGLE_VINYL":
      return {
        ...state,
        loading: false,
        singleVinyl: action.payload,
        error: "",
      };
    case "SEARCH_VINYL_DATA":
      return {
        ...state,
        loading: false,
        searchVinylResults: action.payload,
        error: "",
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((cart) =>
          cart.id === action.payload.id
            ? (cart.qty = action.payload.qty)
            : cart.qty
        ),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload }],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (wishlist) => wishlist.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
