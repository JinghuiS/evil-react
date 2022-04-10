import './styles/index.css';
import 'reset-css';
import 'virtual:windi.css';

import { appBootStartup } from './app/App.module';
import React from 'react';
import ReactDOM from 'react-dom';

appBootStartup().then((Root) => {
    ReactDOM.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>,
        document.getElementById('root'),
    );
});
