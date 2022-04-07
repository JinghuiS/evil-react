import { HttpConfig } from '@ngify/http';
import { Dependency } from '@wendellhu/redi';
import { HttpClient } from './client';
import { HTTP_CLIENT_CONFIG } from './config';
import { HTTP_INTERCEPTOR, NoopInterceptor } from './interceptor';

export class HttpClientModule {
    static forRoot(config: HttpConfig = {}): Dependency<any>[] {
        return [
            [
                HTTP_CLIENT_CONFIG,
                {
                    useValue: config,
                },
            ],
            [
                HTTP_INTERCEPTOR,
                {
                    useClass: NoopInterceptor,
                },
            ],
            [HttpClient],
        ];
    }
}
