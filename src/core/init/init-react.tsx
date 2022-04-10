import React from 'react';
import { connectInjector } from '@wendellhu/redi/react-bindings';
import { Dependency, Injector, Optional } from '@wendellhu/redi';
import { APP_INITIALIZER } from './init-token';

interface BootStartupType {
    /**根组件 */
    app: any;
    /**提供注入 */
    providers: Dependency<any>[];
}

/**启动react */
export async function bootStartup(boot: BootStartupType) {
    const providers: Dependency<any>[] = [[APP_INITIALIZER, { useValue: async () => {} }]];

    const inject = new Injector(providers);
    const childInject = inject.createChild(boot.providers);
    const AppView = boot.app;
    const App: React.FC = () => {
        return <AppView />;
    };

    const appInit = childInject.get(APP_INITIALIZER);
    await appInit()
        .then((res) => {
            console.log('initialization success');
        })
        .catch((err) => {
            console.log('initialization failed');
        });
    const Root = connectInjector(App, childInject);
    return Root;
}
