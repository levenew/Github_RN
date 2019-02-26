import Types from '../../action/types'

const defalutState = {
    theme: 'blue'
}

export default function onAction(state = defalutState, action) {
    switch (action.type) {
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme,
            };
        default:
            return state;
    }

}
