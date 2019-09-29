import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import { loadState,saveStore } from "./persist";
import { createLogger } from "redux-logger";

const persistedState=loadState()
console.log(persistedState)

const store = createStore(reducer,persistedState.todoStore);

store.subscribe(()=>{
	saveStore(store.getState())
})


export default store