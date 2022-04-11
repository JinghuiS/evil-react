import { createIdentifier } from '@wendellhu/redi';

export type APP_INITIALIZER_TYPE = {
    startup: () => Promise<any>;
};
export const APP_INITIALIZER = createIdentifier<APP_INITIALIZER_TYPE>('Application Initializer');
