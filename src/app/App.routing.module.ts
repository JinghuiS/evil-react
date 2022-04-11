import { IRoutes, RouterModule } from 'react-module/router';
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
    });
}
