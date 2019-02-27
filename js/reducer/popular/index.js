import Types from '../../action/types'

const defalutState = {}

/**
 * popular:{
 *     java:{
 *         items:[],
 *         isLoading:false
 *     },
 *     ios:{
 *         items:[],
 *         isLoading:false
 *     }
 * }
 * 0.state树，横向扩展
 * 1.如何动态的设置store，和动态获取store(难点：store key不固定)；
 * @param state
 * @param action
 * @returns {{theme: (onAction|*|string)}}
 */
export default function onAction(state = defalutState, action) {
    switch (action.type) {
        case Types.POPULAR_REFRESH_SUCCSS:  //下拉刷新成功
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    items:action.items,//元素数据
                    projectModes: action.projectModes,
                    isLoading: false,
                    hideLoadingMore: false,
                    pageIndex:action.pageIndex
                }
            };
        case  Types.POPULAR_REFRESH:  //下拉刷新
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: true,
                }
            };
        case  Types.POPULAR_REFRESH_FAIL: //下拉刷新失败
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: false,
                }
            };
        case  Types.POPULAR_LOAD_MORE_SUCCESS: //上拉加载更多成功
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    projectModes:action.projectModes,
                    hideLoadingMore: false,
                    pageIndex:action.pageIndex
                }
            };
        case  Types.POPULAR_LOAD_MORE_FAIL: //上拉加载更多失败
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    hideLoadingMore: true,
                    pageIndex:action.pageIndex
                }
            };
        default:
            return state;
    }

}
