declare const require: any;
require('fetch-ie8');
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import * as Actions from "./actions";
import Homepage from "./containers/Homepage";
import { helloApp } from "./reducers";

declare const window: any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    helloApp,
    composeEnhancers(applyMiddleware(thunk))
);
// Log the initial state
console.log(store.getState());;

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(Actions.addLog("Hello from the react/redux/typescript/webpack boilerplate"));
store.dispatch(Actions.addError("Both of these messages were dispatched via redux actions"));
store.dispatch(Actions.getRandomChuckNorrisJoke());
// unsubscribe from store updates
unsubscribe();

const mount: Element | null = document.querySelector("#app");

if (mount !== null) {
    ReactDOM.render(
        <Provider store={store}>
            <Homepage />
        </Provider>,
        mount,
    );
} else {
    console.error(`#app not found in document`);
}
