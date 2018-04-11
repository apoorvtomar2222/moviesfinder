import {
    HOME_FEED_DATA_ERROR,
    HOME_FEED_DATA_LOADING,
    HOME_FEED_DATA_SUCCESS
} from '../../constants/index';
export const asyncHomeDataLoading = () => {
    return {
        type: HOME_FEED_DATA_LOADING

    }
}

export const asyncHomeDataLoadingSuccess = (data) => {
    return {
        type: HOME_FEED_DATA_SUCCESS,
        data
    }
}

export const asyncHomeDataLoadingError = (err) => {
    return {
        type: HOME_FEED_DATA_ERROR,
        err
    }
}