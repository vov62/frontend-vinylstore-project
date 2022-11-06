
export const initialState = {
    loading: true,
    error: '',
    data: [],
    dubData: [],
    dancehallData: [],
    singleVinyl: [],
    cart: [],
    products: [],
    total: 0,
}

export const fetchDataReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        case 'FETCH_DUB_STYLE':
            return {
                ...state,
                loading: false,
                dubData: action.payload,
                error: ''
            }
        case 'FETCH_DANCEHALL_STYLE':
            return {
                ...state,
                loading: false,
                dancehallData: action.payload,
                error: ''
            }
        case 'FETCH_SINGLE_VINYL':
            return {
                ...state,
                loading: false,
                singleVinyl: action.payload,
                error: ''
            }
        // case 'ADD_TO_CART':
        //     return {
        //         ...state,
        //         cart: action.payload.cart
        //     }
        // case 'REMOVE_FROM_CART':
        //     return {
        //         ...state,
        //         cart: action.payload.cart
        //     }
        // case 'UPDATE_PRICE':
        //     return {
        //         ...state,
        //         total: action.payload.total
        //     }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((c => c.id !== action.payload.id))
            }
        default:
            return state
    }
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((c => c.id !== action.payload.id))
            }
        default:
            return state
    }
}
