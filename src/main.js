import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from "react-native-router-flux";
import thunk from 'redux-thunk';

import RootReducer from './root/reducer';
import scenes from './routes/scenes';


export default class AppContainer extends React.Component {
	render() {
		return (
			<Provider store = {createStore(RootReducer, applyMiddleware(thunk))}>
				<Router scenes={scenes}/>
			</Provider>
			)
	}
}