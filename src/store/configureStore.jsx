import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "../services/auth/authSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
