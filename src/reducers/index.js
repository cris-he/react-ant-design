import {combineReducers} from 'redux';
import AuthReducer from './auth-reducer';


const reducers = combineReducers ({
    user: AuthReducer,
});

export default reducers;