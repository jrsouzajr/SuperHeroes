import * as actionTypes from '../actions/actionTypes';

const initialState = {
        listCharacters: [],
        editCharacter: {}
};

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CHARACTER:
            return {
                ...state,
                listCharacters: [...state.listCharacters, action.value],
                editCharacter: {}
            };
        case actionTypes.REMOVE_CHARACTER:
            return {
                ...state,
                listCharacters: state.listCharacters.filter(character => {
                    return character.id != action.value
                })
            };
        case actionTypes.EDIT_CHARACTER:
            return {
                ...state,
                editCharacter: action.value,
                listCharacters: state.listCharacters.filter(character => {
                    return character.id != action.value.id
                })
            };
        default:
            return state;
    }
};