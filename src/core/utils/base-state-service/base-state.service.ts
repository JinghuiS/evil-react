import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

export class BaseStateService {
    private updated$ = new BehaviorSubject<void>(undefined);

    updateNext() {
        this.updated$.next();
    }
    useUpdateBinder(): void {
        const [, dumpSet] = useState(0);
        useEffect(() => {
            const subscription = this.updated$.subscribe(() => dumpSet((prev) => prev + 1));
            return () => subscription.unsubscribe();
        }, []);
    }
}
