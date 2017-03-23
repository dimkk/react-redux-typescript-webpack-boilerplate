declare const require: any;
require('fetch-ie8');
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { routerMiddleware, push } from 'react-router-redux'

require('./vendor/vendor');

import * as Actions from "./actions";
import Homepage from "./containers/Homepage";
import Foo from "./components/Foo";
import App from "./components/App";
import { helloApp } from "./reducers";

declare const window: any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    helloApp,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(hashHistory)))
);
// Log the initial state
console.log(store.getState());

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
const history = syncHistoryWithStore(hashHistory, store)

if (mount !== null) {
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <Router  history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Homepage}/>
                        <Route path="foo" component={Foo}/>
                    </Route>
                </Router>
            </div>
        </Provider>,
        mount,
    );
} else {
    console.error(`#app not found in document`);
}
