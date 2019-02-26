import {AsyncStorage} from 'react-native'


export default class DataStore {


    saveData(url, data, callback) {
        if (!data || !url) return;
        AsyncStorage.setItem(url, JSON.stringify(this._wrapData(data)), callback)
    }


    _wrapData(data) {
        return {data: data, timestamp: new Date().getTime()}
    }



    fetchNetData(url) {
        return new Promise((resolve, reject) => {
             fetch(url)
                 .then((response)=>{
                     if(response.ok)
                         return response.json()
                     throw new Error('Network response was not ok.')
                 })
        })
    }


    fetchLocalData(url) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(url, (error, result) => {
                if (!error) {
                    try {
                        resolve(JSON.parse(result))
                    } catch (e) {
                        rejecte(e)
                        console.error(e)
                    }
                }else{
                    rejecte(error)
                    console.error(error)
                }
            })
        })
    }

}
