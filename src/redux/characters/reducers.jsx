import initialState from "../store/initialState";
import * as Actions from "./actions";

export const CharactersReducer = (state = initialState.charactors, action) => {
	switch (action.type) {
		case Actions.DELETE_CHARACTER:
			return {
				...state,
				list: action.payload,
			};
		case Actions.FETCH_CHARACTERS:
			return {
				...state,
				list: action.payload,
			};

		case Actions.INIT_CHARACTER:
			return {
				...initialState.characters,
			};

		default:
			return state;
	}
};
