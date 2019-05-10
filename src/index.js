import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './services/serviceWorker';

/* App Root */
import Main from './main';

/* Ant Design CSS */
import 'antd/dist/antd.css';



/* Redux */
import { Provider } from 'react-redux';
import configStore from './store/config-store';
const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
