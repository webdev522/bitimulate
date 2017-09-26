import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';
import configureStore from 'store/configure';

const store = configureStore();
// import modules from './store/modules/';
// console.log(modules);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
