import {
    asyncHomeDataLoading,
    asyncHomeDataLoadingError,
    asyncHomeDataLoadingSuccess
} from '../action/home.action'

import { postApiCall } from '../../helper/util';
export const asyncDataload = (username) => {
    return (dispatch) => {
        dispatch(asyncHomeDataLoading());
        return (postApiCall(username)
            .then((data) => {
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
