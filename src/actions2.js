export const ADD_NAME = 'ADD_NAME';
export const EDIT_NAME = 'EDIT_NAME';

export function addName() {
    return {type: ADD_NAME, payload: {name: "JANPOL"}}
}

export function editName() {
    return {type: EDIT_NAME}
}