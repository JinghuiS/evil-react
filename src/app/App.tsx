import { RouterDiView } from 'react-module/router';
import React from 'react';
import { HashRouter } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <HashRouter>
            <RouterDiView />
        </HashRouter>
    );
};

export default App;
