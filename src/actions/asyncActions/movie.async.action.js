import {
    asyncMovieDataError,
    asyncMovieDataSuccess,
    asyncMovieDataLoading,
    asyncSearchDataLoading,
    asyncSearchDataSuccess,
    asyncSearchDataError
} from '../action/movie.action'

import { getMovieDetails, searchMovieDetails } from '../../helper/util'

export const asyncLoadMovieDetails = (param, dispatch) => {
    return (dispatch) => {
        dispatch(asyncMovieDataLoading());
        return (getMovieDetails(param))
            .then(data => dispatch(asyncMovieDataSuccess(data)))
            .catch(err => asyncMovieDataError(err))

    }

}

export const asyncSearchMovie = (searchparam) => {

    return (dispatch) => {
        dispatch(asyncSearchDataLoading());
        return (searchMovieDetails(searchparam))
            .then(data => {
                dispatch(asyncSearchDataSuccess(data))
            })
            .catch(err => dispatch(asyncSearchDataError(err)))
    }
}
