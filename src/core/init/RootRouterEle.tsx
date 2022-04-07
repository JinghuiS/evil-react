import { useRoutes } from 'react-router-dom';
import { RouterModuleForRoot } from '../router/router.module';
import { useService } from '../utils/base-state-service/useService';

const RootRouterEle = ({ App }: { App: any }) => {
    const router = useService(RouterModuleForRoot);

    const element = useRoutes([...router.scan(router.routes)]);
    return element;
};

export { RootRouterEle };
