import { RouterModule } from 'react-module/router';
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
