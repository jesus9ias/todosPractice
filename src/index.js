import React from 'react';
import ReactDOM from 'react-dom';
//  import App from './App';
import App from './router';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
