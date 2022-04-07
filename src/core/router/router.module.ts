import { Dependency, Inject } from '@wendellhu/redi';
import { RouterChildModule, RouterChildModuleProps } from './router-child.module';
import { IRoutes, RouterConfig, RouterConfigType } from './router-config';

export class RouterModuleForRoot {
    path: string = '/';
    routes: IRoutes[] = [];
    constructor(@Inject(RouterConfig) private readonly routerConfig: RouterConfigType) {
        if (this.routerConfig.path) {
            this.path = this.routerConfig.path;
        }
        this.routes = this.routerConfig.router;
    }

    scan(routes: IRoutes[]): any {
        return routes.map((route) => {
            if (route.module) {
                return {
                    path: route.path,
                    element: route.module.element,
                    children: route.children
                        ? [...this.scan(route.children), ...this.scan(route.module.routes)]
                        : this.scan(route.module.routes),
                };
            }
            if (route.children) {
                return {
                    ...route,
                    children: this.scan(route.children),
                };
            } else {
                return {
                    ...route,
                };
            }
        });
    }
}

export const RouterModule = {
    forRoot: (router: RouterConfigType): Dependency<any>[] => [
        [
            RouterConfig,
            {
                useValue: router,
            },
        ],
        [RouterModuleForRoot],
    ],
    forChild: (opt: RouterChildModuleProps) => RouterChildModule(opt),
};
