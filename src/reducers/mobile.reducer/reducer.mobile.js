import {
    MOVIE_FEED_DATA_LOADING,
    MOVIE_FEED_DATA_SUCCESS,
    MOVIE_FEED_DATA_ERROR
} from '../../constants/index';

const initialState = {
    loading: false,
    movieDetails: {}
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_FEED_DATA_LOADING: {
            return {
                ...state,
                loading: true
            }

        }
        case MOVIE_FEED_DATA_SUCCESS: {
            return {
                ...state,
                movieDetails: action.data
            }
        }
        case MOVIE_FEED_DATA_ERROR: {
            return {
                ...state,
                err: action.data
            }
        }
        default:
            return {
                ...state

            }
    }

}
