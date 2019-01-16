import { EnthusiasmAction, GalleryAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, CURRENT_PHOTO, OVERTURN_PHOTO } from '../constants/index';
import { combineReducers } from 'redux'

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}

export function galleryPhoto(state: StoreState, action: GalleryAction): StoreState {
  switch (action.type) {
    case CURRENT_PHOTO:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case OVERTURN_PHOTO:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}

export default combineReducers({
  enthusiasm,
  galleryPhoto
})