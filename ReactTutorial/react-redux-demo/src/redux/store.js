import cakeReducer from "./Cake/cakeReducer";
import { createStore } from "redux";


const store = createStore(cakeReducer)

export default store;