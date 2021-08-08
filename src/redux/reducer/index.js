import ActionType from "../ActionType";

const initialState = {
    isRegisterSuccess: false,
    userName: 'faizal'
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.REGISTER_SUCCESS:
            return {
                ...state,
                isRegisterSuccess: action.value
            }
            break;
        case ActionType.CHANGE_USERNAME:
            return {
                ...state,
                isRegisterSuccess: action.value
            }
            break;
        default:
            return state;
            break;
    }


}

export default reducer;