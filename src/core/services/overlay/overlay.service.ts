import { Injector } from '@wendellhu/redi';
import ReactDOM from 'react-dom';
import { Subject, Observable, Observer } from 'rxjs';
import { createOVerlay } from './CreateOverlay';
import { OverLayChildRef } from './overlay-token';
import { OverlayType } from './overlay-types';

export class OverlayService {
    private overlayElement: any = null;
    constructor(private readonly injector: Injector) {}
    private overlay$ = new Subject();
    public OverLayChildElement: any;
    public open(overlay: OverlayType) {
        return new Observable((observer: Observer<any>) => {
            this.overlayElement = document.createElement('div');
            document.body.appendChild(this.overlayElement);
            this.injector.add(OverLayChildRef, {
                useValue: {
                    close: this.close.bind(this),
                    ...overlay,
                },
            });
            createOVerlay({
                OverLayChildElement: this.OverLayChildElement,
                close: this.close.bind(this),
                injector: this.injector,
                overlayElement: this.overlayElement,
                ...overlay,
            });
            this.overlay$.subscribe((e) => {
                observer.next(e);
                observer.complete();
                this.overlay$.unsubscribe();
            });
        });
    }
    public close(msg?: any) {
        if (!this.overlayElement) return;
        const unmountResult = ReactDOM.unmountComponentAtNode(this.overlayElement);
        if (unmountResult && this.overlayElement.parentNode) {
            this.overlayElement.parentNode.removeChild(this.overlayElement);
        }
        this.overlayElement = null;

        if (msg) {
            this.overlay$.next(msg);
        } else {
            this.overlay$.complete();
        }
    }
}
