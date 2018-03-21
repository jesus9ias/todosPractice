import React from 'react';
import ReactDOM from 'react-dom';
import { EventEmitter } from 'fbemitter';
import App from './router';
import registerServiceWorker from './utils/registerServiceWorker';

global.eventHub = new EventEmitter();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
