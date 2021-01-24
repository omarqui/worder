import React, { FunctionComponent, ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../../redux/rootReducer";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const Wrapper: FunctionComponent = ({ children }) => (
    <Provider store={store} >
        { children}
    </Provider>
)

const renderWithState = (ui: ReactElement, options?: Object) =>
    render(ui, { wrapper: Wrapper, ...options })

export * from '@testing-library/react'
export { renderWithState as render, store }