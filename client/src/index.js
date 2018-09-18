import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageHandler from './PageHandler';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageHandler />, document.getElementById('root'));
registerServiceWorker();
