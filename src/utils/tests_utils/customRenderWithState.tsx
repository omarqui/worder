import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../../redux/rootReducer";

function makeTestStore() {
    const store = makeStore()
    const origDispatch = store.dispatch
    store.dispatch = jest.fn(origDispatch)
    return store
}

const TestProvider = ({
    store,
    children
}: any) => <Provider store={store}>{children}</Provider>

function testRender(ui: ReactElement, { store, ...otherOpts }: any = { store: makeTestStore() }) {
    const result = render(<TestProvider store={store}>{ui}</TestProvider>, otherOpts);
    return { ...result, store }
}

const makeStore = () => createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export * from '@testing-library/react'
export { testRender as render }