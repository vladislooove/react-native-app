import React from 'react';
import { Text } from 'react-native';

import Navigation from './src/containers/Navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combinedStore from './src/reducers/'
import mySaga from './src/sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combinedStore, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>            
                <Navigation />
            </Provider>
        )
    }
}