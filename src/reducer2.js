import { ADD_NAME, EDIT_NAME } from "./actions2"

const initialState = {
    personNameList: []
}


const reducer2 = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAME:
            return { ...state.personNameList, personNameList: [...state.personNameList, action.payload]};
        case EDIT_NAME:
            return {}
        default:
            return state
    }
}

export default reducer2;