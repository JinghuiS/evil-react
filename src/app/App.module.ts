import { APP_INITIALIZER } from '@/core/init/init-token';
import { HttpClientModule } from 'react-module/http';
import { bootStartup } from 'react-module/init';
import App from './App';
import { AppRouterModule } from './App.routing.module';

export function appBootStartup() {
    return bootStartup({
        app: App,
        providers: [
            ...AppRouterModule(),
            ...HttpClientModule.forRoot({}),
            [
                APP_INITIALIZER,
                {
                    useValue: () => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                return resolve('app init');
                            }, 1000);
                        });
                    },
                },
            ],
        ],
    });
}
