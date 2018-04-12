import {
    HOME_FEED_DATA_SUCCESS,
    HOME_FEED_DATA_LOADING,
    HOME_FEED_DATA_ERROR,
    SEARCH_MOVIE_LOADING,
    SEARCH_MOVIE_LOADING_ERROR,
    SEARCH_MOVIE_LOADING_SUCCESS
} from '../../constants/index'
const initialState = {
    loading: false,
    movielist: [],
    nosuchmovie: false
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_FEED_DATA_LOADING: {
            return {
                ...state,
                loading: true,
                movielist: []

            }
        }
        case HOME_FEED_DATA_SUCCESS: {
            return {
                ...state,
                movielist: action.data.results

            }
        }
        case HOME_FEED_DATA_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case SEARCH_MOVIE_LOADING: {
            return {
                ...state,
                loading: true,
                movielist: []

            }
        }
        case SEARCH_MOVIE_LOADING_SUCCESS: {
            if (action.data.results.length === 0) {
                return {
                    ...state,
                    movielist: action.data.results,
                    nosuchmovie: true

                }
            }
            else {
                return {
                    ...state,
                    movielist: action.data.results,
                    nosuchmovie: false

                }
            }

        }
        case SEARCH_MOVIE_LOADING_ERROR: {
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