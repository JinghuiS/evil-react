import { RouterModule } from '@/core/router/router.module';
import { Home } from './Home';
export function HomeModule() {
    return RouterModule.forChild({
        routes: [
            {
                path: '/abc',
                element: <Home />,
            },
        ],
    });
}
