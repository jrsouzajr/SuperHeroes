import * as actionTypes from './actionTypes'

export const addCharacterToList = newCharacter => ({
    type: actionTypes.ADD_CHARACTER,
    value: newCharacter
  });

export const removeCharacterFromList = idCharacter => ({
    type: actionTypes.REMOVE_CHARACTER,
    value: idCharacter
})

export const editCharacterFromList = character => ({
    type: actionTypes.EDIT_CHARACTER,
    value: character
})