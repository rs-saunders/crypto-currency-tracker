import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();
ReactDOM.render(<IntlProvider locale="en-GB"><App /></IntlProvider>, document.getElementById('root'));
registerServiceWorker();
