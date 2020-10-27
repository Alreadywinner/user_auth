import userSignupR from '../reducers/userSignupR';
import userlogINR from '../reducers/userlogINR';
import authReducer from '../reducers/authReducer';
import userLogoutR from '../reducers/userLogoutR';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    patient:userSignupR,
    pasta:userlogINR,
    macroni:authReducer,
    pizza:userLogoutR
});

export default rootReducer;