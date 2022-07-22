import { authReducer } from './../components/Auth/auth-reducer';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import appReducer, { AppActionsType } from './app-reducer';
import { AuthActionsType } from '../components/Auth/auth-reducer';
import { FavoritesActionsType, favoritesReducer } from '../components/SearchHotels/Favorites/favorites-reducer';
import { HotelsActionsType, hotelsReducer } from '../components/SearchHotels/Main/hotels-reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    hotel: hotelsReducer,
    favoriteHotel: favoritesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof store.getState>
type AppRootActionsType = AppActionsType | AuthActionsType | HotelsActionsType | FavoritesActionsType

// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>

// @ts-ignore
window.store = store
