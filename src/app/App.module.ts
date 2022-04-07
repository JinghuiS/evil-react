import { bootStartup } from '@/core/init/init-react';
import App from './App';
import { AppRouterModule } from './App.routing.module';

export function appBootStartup() {
    bootStartup({
        app: App,
        mount: 'root',
        providers: [...AppRouterModule()],
    });
}
