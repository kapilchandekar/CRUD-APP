import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Redux/rootReducer";
import createSagaMiddleware from "redux-saga";
import getProducts from "./usersagas";
// import logger from "./redux-logger"

const sagMiddleware = createSagaMiddleware();

const middlewares = [sagMiddleware];

// if (process.env.NODE_ENV === "development"){
//   middlewares.push(logger)
// }

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  )
);
sagMiddleware.run(getProducts);

export default store;
