import { authReducer } from './auth-reducer';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import appReducer from './app-reducer';
import { favoritesReducer } from './favorites-reducer';
import { hotelsReducer } from './hotels-reducer';
import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { requestHotelsWorkerSaga } from './hotels-sagas';

export const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    hotel: hotelsReducer,
    favoriteHotel: favoritesReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


sagaMiddleware.run(rootWacher)

function* rootWacher() {
    yield takeEvery('HOTELS/REQUEST_HOTELS', requestHotelsWorkerSaga)
}

// @ts-ignore
window.store = store
