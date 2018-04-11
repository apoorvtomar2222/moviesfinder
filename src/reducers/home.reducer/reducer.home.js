import {
    HOME_FEED_DATA_SUCCESS,
    HOME_FEED_DATA_LOADING,
    HOME_FEED_DATA_ERROR
} from '../../constants/index'
const initialState = {
    loading: false,
    movielist: {}
}

export const homeReducer = (state = initialState, action) => {
    console.log('action', action);
    switch (action.type) {
        case HOME_FEED_DATA_LOADING: {
            return {
                ...state,
                loading: true,

            }
        }
        case HOME_FEED_DATA_SUCCESS: {
            return {
                ...state,
                movielist: action.data

            }
        }
        case HOME_FEED_DATA_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return {
                ...state
            }

        }
    }
}