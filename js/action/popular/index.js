import Types from '../types'
import DataStore from '../../expand/dao/DataStore'

export function onLoadPopularData(storeName, url) {

    console.info(url);

    return dispatch => {
        dispatch({type: Types.POPULAR_REFRESH, storeName})
        let dataStore = new DataStore()
        dataStore.fechData(url)  //异步action
            .then(data => {
                handleData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: Types.POPULAR_REFRESH_FAIL,
                    storeName,
                    error
                })
            })
    }
}


function handleData(dispatch, storeName, data) {
    dispatch({
        type: Types.POPULAR_REFRESH_SUCCESS,
        items: data && data.data && data.data.items,
    })

}