export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const deleteCharacterAction = (characters) => {
	return {
		type: "DELETE_CHARACTER",
		payload: characters,
	};
};

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const fetchCharacterAction = (characters) => {
	return {
		type: "FETCH_CHARACTER",
		payload: characters,
	};
};

export const INIT_CHARACTER = "INIT_CHARACTER";
export const initCharacterAction = () => {
	return {
		type: "INIT_CHARACTER",
		payload: null,
	};
};
