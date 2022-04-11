import { useDependency, useInjector } from '@wendellhu/redi/react-bindings';
import { OverLayChildRef } from './overlay-token';
import { OverlayService } from './overlay.service';

export function useOverlay(overlayChild: any) {
    const inject = useInjector();
    const overlayService = new OverlayService(inject);
    overlayService.OverLayChildElement = overlayChild;
    return { open: overlayService.open.bind(overlayService) };
}

export function useOverlayRef() {
    const overlayService = useDependency(OverLayChildRef);
    return overlayService;
}
