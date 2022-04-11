import { HttpClientModule } from 'react-module/http';
import { bootStartup } from 'react-module/init';
import App from './App';
import { AppRouterModule } from './App.routing.module';

export function appBootStartup() {
    return bootStartup({
        declarations: App,
        providers: [...AppRouterModule(), ...HttpClientModule.forRoot({})],
    });
}
