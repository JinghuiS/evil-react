import { createIdentifier } from '@wendellhu/redi';
import { OverlayType } from './overlay-types';

interface OverlayChildRef extends OverlayType {
    close: (msg?: any) => void;
}

export const OverLayChildRef = createIdentifier<OverlayChildRef>('OverLayChildRef');
