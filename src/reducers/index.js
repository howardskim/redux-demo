import { combineReducers } from 'redux';
import themeReducer from './theme_reducer';

//state.theme will access whatever the theme_reducer function returns

const rootReducer = combineReducers({
    theme: themeReducer
});

export default rootReducer; 