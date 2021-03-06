import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let rerenderEntireTree = (store) => {
    ReactDOM.render(
            <App store={store} />,
        document.getElementById('root')
    )
};

rerenderEntireTree(store);

serviceWorker.unregister();
