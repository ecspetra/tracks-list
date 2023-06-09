import type { Action } from '../actions';

export const initialState = {
	currentTrack: null,
	tracks: [],
};

export type Store = typeof initialState;

export const tracksReducer = (state: Store, action: Action) => {
	switch(action.type) {
		case 'ADD_TRACK':
			const isTrackAlreadyExistInState = state.tracks.find((item) => item.track.id === action.payload.track.id);
			if (isTrackAlreadyExistInState) {
				return state;
			} else {
				return {
					...state,
					tracks: [...state.tracks, action.payload],
				}
			}
		case 'SET_CURRENT_TRACK':
			return {
				...state,
				currentTrack: action.payload,
			}
		case 'CLEAR_CURRENT_TRACK':
			return {
				...state,
				currentTrack: null,
			}
		case 'CLEAR_TRACKS':
			return {
				currentTrack: null,
				tracks: [],
			}
		default:
			return state;
	}
}