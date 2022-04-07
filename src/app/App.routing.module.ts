import { IRoutes } from '@/core/router/router-config';
import { RouterModule } from '@/core/router/router.module';
import { HashRouter } from 'react-router-dom';
import { HomeModule } from './pages/home/Home.module';

const routes: IRoutes[] = [
    {
        path: '/',
        module: HomeModule(),
    },
];

export function AppRouterModule() {
    return RouterModule.forRoot({
        router: routes,
        routerEl: HashRouter,
        path: '/',
    });
}
