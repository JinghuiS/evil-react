import { Self } from '@wendellhu/redi';
import { connectInjector } from '@wendellhu/redi/react-bindings';
import ReactDOM from 'react-dom';
import { OverlayType } from './overlay-types';
import { OverlayService } from './overlay.service';

interface CreateOverlayType extends OverlayType {
    OverLayChildElement: any;
    close: any;
    injector: any;
    overlayElement: any;
}

export function createOVerlay({ OverLayChildElement, close, overlayElement, injector, component, params, options }: CreateOverlayType) {
    const Component = component;

    const OverLayChild = connectInjector(
        () => (
            <OverLayChildElement opened={true} onClose={close} {...options}>
                <Component {...params} />
            </OverLayChildElement>
        ),
        injector,
    );
    ReactDOM.render(<OverLayChild />, overlayElement);
}
