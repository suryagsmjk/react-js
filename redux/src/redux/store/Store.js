import { legacy_createStore, combineReducers } from "redux"
import { countReducer } from "../reducer/CountReducer"
import { colorReducer } from "../reducer/ColorReducer"

const rootReducer = combineReducers({ countReducer, colorReducer })

export const store = legacy_createStore(rootReducer)