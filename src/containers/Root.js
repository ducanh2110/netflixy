import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import DevTools from './DevTools';

const Root = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Hello I'm Root Component</h1>
                <DevTools/>
            </div>
        </Provider>
    )
}

export default Root
