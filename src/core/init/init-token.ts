import { createIdentifier } from '@wendellhu/redi';

export type APP_INITIALIZER_TYPE = () => Promise<any>;

export const APP_INITIALIZER = createIdentifier<APP_INITIALIZER_TYPE>('Application Initializer');
