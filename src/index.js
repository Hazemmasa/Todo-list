import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App appTitle="Todo-list" />, document.getElementById('root'));
registerServiceWorker();
