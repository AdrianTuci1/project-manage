import { createStore, combineReducers, applyMiddleware} from 'redux';
import { thunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { projectReducer } from './redux/reducers';
const reducers = {
projectReducer,
};
const rootReducer = combineReducers(reducers);
// Create the redux logging middleware
const loggerMiddleware = createLogger()
export const configureStore= (preloadedState) => createStore(
rootReducer,
preloadedState,
applyMiddleware(
thunkMiddleware,
loggerMiddleware
)
);