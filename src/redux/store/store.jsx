import {
	createStore as reduxCreateStore,
	combineReducers,
	applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { CharactersReducer } from "../characters/reducers";
import thunk from "redux-thunk";

export default function createStore(history) {
	return reduxCreateStore(
		combineReducers({
			router: connectRouter(history),
			character: CharactersReducer,
		}),
		applyMiddleware(routerMiddleware(history), thunk)
	);
}
