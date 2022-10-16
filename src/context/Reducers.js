const fetchDataReducer = (state, action) => {

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
                data: {},
                error: action.payload
            }
        case 'FETCH_DUB_STYLE':
            return {
                ...state,
                loading: false,
                dubData: action.payload,
                error: ''
            }
        default:
            return state
    }
}

export default fetchDataReducer;
