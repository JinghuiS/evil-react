import { useRoutes } from 'react-router-dom';
import { RouterModuleForRoot } from '../router/router.module';
import { useService } from '../services';

const RouterDiView = () => {
    const router = useService(RouterModuleForRoot);
    const element = useRoutes([...router.scan(router.routes)]);
    return element;
};

export { RouterDiView };
