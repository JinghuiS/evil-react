import React from 'react';

import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { connectDependencies, connectInjector, useInjector } from '@wendellhu/redi/react-bindings';
import { Dependency, Injector } from '@wendellhu/redi';
import { RootRouterEle } from './RootRouterEle';
import { RouterConfig } from '../router/router-config';
type RouterEl = typeof HashRouter | typeof BrowserRouter;

interface BootStartupType {
    /**根组件 */
    app: any;

    /**挂载点 */
    mount?: string;
    /**提供注入 */
    providers: Dependency<any>[];
}

/**启动react */
export function bootStartup(boot: BootStartupType) {
    const App = () => {
        const injector = useInjector();
        const RouterEl = injector.get(RouterConfig).routerEl;
        const RootApp = boot.app;
        return (
            <RootApp>
                {' '}
                <RouterEl>
                    <RootRouterEle App={boot.app} />
                </RouterEl>
            </RootApp>
        );
    };

    const Root = connectDependencies(App, boot.providers);

    const mount = boot.mount || 'root';

    ReactDOM.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>,
        document.getElementById(mount),
    );
}
