// crio um armazenamento para o state global
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'

const history = createHistory ()
export const store = createStore (
    reducers,
    applyMiddleware (
        thunkMiddleware,
        routerMiddleware(historico)
    )
)