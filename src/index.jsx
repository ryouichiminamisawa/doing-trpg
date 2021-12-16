import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import createStore from "./redux/store/store.jsx";
import * as History from "history";
// import { ConnectedRouter } from "connected-react-router";

const history = History.createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
	<Provider store={store}>
		{/* <ConnectedRouter history={history}>
		</ConnectedRouter> */}
		<App />
	</Provider>,
	document.getElementById("root")
);
