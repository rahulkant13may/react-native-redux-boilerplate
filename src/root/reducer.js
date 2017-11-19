import { combineReducers } from 'redux';
import set_message from '../routes/Home/reducers/set_message'

const rootReducer = combineReducers({ 
	set_message
});

export default rootReducer;