import { GITHUB_FETCH_USER } from '../constants/api'
export const postApiCall = (apiCall) => {
    return fetch(GITHUB_FETCH_USER)
        .then((res) => res.json)
        .then(data => { return Promise.resolve(data) })
        .catch(error => { return Promise.reject(error) })
}
