export const cartReducer = (state, action) => {

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
