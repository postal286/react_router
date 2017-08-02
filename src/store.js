import { createStore, applyMiddleware, compose } from "redux"
import reducer from "./reducers"
import thunk from "redux-thunk"

const middleware = applyMiddleware(thunk);
export default createStore(
  reducer,
  compose(
  	middleware,
  	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)
