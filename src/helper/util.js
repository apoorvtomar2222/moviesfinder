import { FETCH_LIST, FETCH_MOVIE_DETAILS } from '../constants/api'
export const postApiCall = (apiCall) => {
    return fetch(FETCH_LIST)
        .then((res) => res.json())
        .then(data => { return Promise.resolve(data) })
        .catch(error => { return Promise.reject(error) })
}
const Api_key = '?api_key=4e727900dca2a32d5bcee16bd47cb2ea';

export const getMovieDetails = (param) => {
    const finalUrl = `${FETCH_MOVIE_DETAILS}/${param.id}${Api_key}`
    return fetch(finalUrl)
        .then((res) => res.json())
        .then(data => { return data })
        .catch(error => { return error })
}
export const searchMovieDetails = (param) => {

    const finalUrl = `https://api.themoviedb.org/3/search/movie${Api_key}&query=${param}`;
    return fetch(finalUrl)
        .then((res) => res.json())
        .then(data => { return data })
        .catch(error => { return error })
}
