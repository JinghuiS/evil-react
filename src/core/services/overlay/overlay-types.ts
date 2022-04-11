export type OverlayType<T = any> = {
    component: React.ComponentType<any>;
    options?: T;
    params?: any;
};
