import {

    MOVIE_FEED_DATA_ERROR,
    MOVIE_FEED_DATA_SUCCESS,
    MOVIE_FEED_DATA_LOADING,
    SEARCH_MOVIE_LOADING,
    SEARCH_MOVIE_LOADING_SUCCESS,
    SEARCH_MOVIE_LOADING_ERROR,

} from '../../constants/index';

export const asyncMovieDataLoading = () => {
    return {
        type: MOVIE_FEED_DATA_LOADING
    }
}

export const asyncMovieDataSuccess = (data) => {
    return {
        type: MOVIE_FEED_DATA_SUCCESS,
        data
    }
}
export const asyncMovieDataError = (err) => {
    return {
        type: MOVIE_FEED_DATA_ERROR,
        err
    }
}
export const asyncSearchDataLoading = () => {
    return {
        type: SEARCH_MOVIE_LOADING
    }
}
export const asyncSearchDataSuccess = (data) => {
    return {
        type: SEARCH_MOVIE_LOADING_SUCCESS,
        data
    }
}

export const asyncSearchDataError = (err) => {
    return {
        type: SEARCH_MOVIE_LOADING_ERROR,
        err
    }
}
