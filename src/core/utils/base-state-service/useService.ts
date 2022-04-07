import { DependencyIdentifier } from '@wendellhu/redi';
import { useInjector } from '@wendellhu/redi/react-bindings';
export function useService<T>(service: DependencyIdentifier<T>): T {
    const injector = useInjector();
    const serviceInject = injector.get(service)!;
    //@ts-ignore
    serviceInject.useUpdateBinder && serviceInject.useUpdateBinder();
    return serviceInject;
}
