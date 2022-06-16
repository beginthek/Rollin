import { configureStore, combineReducers } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import userReducer from "./users"
import pageReducer from "./page"
import paperReducer from "./paper"
import gifts from "./gifts"
import { watchGetGifts } from "./giftSaga"
import { watchGetPaper } from "./paperSaga"
import { all } from "redux-saga/effects"
import { watchLogin } from "./usersSaga"

const reducer = combineReducers({
    user: userReducer,
    page: pageReducer,
    paper: paperReducer,
    gifts,
    // rollins,
})
const sagaMiddleware = createSagaMiddleware()
function* rootSaga() {
    yield all([watchGetPaper(), watchGetGifts, watchLogin()]) //같이묶여있어야된다 .
}
// export const store = configureStore({
//   reducer,
//   devTools: true,
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
// });
const createStore = () => {
    const store = configureStore({
        reducer,
        devTools: true,
        middleware: [sagaMiddleware],
    })

    sagaMiddleware.run(rootSaga)

    return store
}
export default createStore
