import { Dependency } from '@wendellhu/redi';
import { connectDependencies } from '@wendellhu/redi/react-bindings';
import { IRoutes } from './router-config';
import { RouterEmpty } from './RouterEmpty';

export type RouterChildModuleProps = {
    routes?: IRoutes[];
    providers?: Dependency<any>[];
    declarations?: any;
};

export function RouterChildModule(opt: RouterChildModuleProps) {
    const { routes, providers, declarations } = opt;
    const Element = connectDependencies(declarations ? declarations : RouterEmpty, providers ? providers : []);

    return {
        element: <Element />,
        routes,
    };
}
