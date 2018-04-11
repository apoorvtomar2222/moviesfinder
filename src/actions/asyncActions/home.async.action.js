import {
    asyncHomeDataLoading,
    asyncHomeDataLoadingError,
    asyncHomeDataLoadingSuccess
} from '../action/home.action'

import { postApiCall } from '../../helper/util';
export const asyncDataload = (username) => {
    console.log('Async data dn');
    return (dispatch) => {
        dispatch(asyncHomeDataLoading());
        return (postApiCall(username)
            .then((data) => {
                console.log('data is ', data);
                dispatch(asyncHomeDataLoadingSuccess(data))
            }
            )
            .catch(
                (error) => {
                    dispatch(asyncHomeDataLoadingError(error));
                }
            )

        )
    }
}
