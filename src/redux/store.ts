import {combineReducers, createStore} from "redux";
import {testReducer} from "./reducers/testReducer";

const reducers = combineReducers({
    test: testReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev