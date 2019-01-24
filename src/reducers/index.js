import { characterReducer } from './characterReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  characterState: characterReducer,
});