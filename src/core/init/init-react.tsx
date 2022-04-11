import { connectInjector } from '@wendellhu/redi/react-bindings';
import { Dependency, Injector } from '@wendellhu/redi';
import { APP_INITIALIZER } from './init-token';
import { NoopStartupService } from './noop-startup.service';

interface BootStartupType {
    /**根组件 */
    declarations: any;
    /**提供注入 */
    providers: Dependency<any>[];
}

/**启动react */
export async function bootStartup(boot: BootStartupType) {
    const providers: Dependency<any>[] = [[APP_INITIALIZER, { useClass: NoopStartupService }]];

    const inject = new Injector(providers);
    const childInject = inject.createChild(boot.providers);
    const AppView = boot.declarations;

    const appInit = childInject.get(APP_INITIALIZER);
    /**
     * init application
     *
     *
     */
    await appInit
        .startup()
        .then((res) => {
            console.log('initialization success');
        })
        .catch((err) => {
            console.log('initialization failed');
        });
    const Root = connectInjector(AppView, childInject);
    return Root;
}
