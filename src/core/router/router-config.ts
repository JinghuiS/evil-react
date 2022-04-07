import { createIdentifier } from '@wendellhu/redi';
import { HashRouter, BrowserRouter, RouteObject } from 'react-router-dom';

type RouterEl = typeof HashRouter | typeof BrowserRouter;

export interface IRoutes extends RouteObject {
    /**守卫组件 */
    canActivate?: any;
    /**加载模块 */
    module?: any;
}

export type RouterConfigType = {
    router: IRoutes[];
    /**路由组件
     * @default HashRouter hash路由
     * @default BrowserRouter history路由
     */
    routerEl: RouterEl;
    /**路由根路径 */
    path?: string;
};

export const RouterConfig = createIdentifier<RouterConfigType>('router-config');
