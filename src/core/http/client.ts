import { HttpClient as NgHttpClient, HttpConfig, HttpInterceptor, setupConfig } from '@ngify/http';
import { Many, Optional } from '@wendellhu/redi';
import { Observable } from 'rxjs';
import { HTTP_CLIENT_CONFIG } from './config';
import { HTTP_INTERCEPTOR } from './interceptor';

export class HttpClient {
    private httpInstance: NgHttpClient;

    constructor(
        @Many() @HTTP_INTERCEPTOR private readonly interceptors: HttpInterceptor[] | HttpInterceptor,
        @Optional(HTTP_CLIENT_CONFIG) private readonly config: HttpConfig,
    ) {
        this.httpInstance = new NgHttpClient(this.getInterceptors());
        if (this.config) {
            setupConfig(this.config);
        }
    }
    private getInterceptors(): HttpInterceptor[] {
        if (!this.interceptors) {
            return [];
        }
        if (Array.isArray(this.interceptors)) {
            return this.interceptors;
        } else {
            return [this.interceptors];
        }
    }

    get get() {
        return this.httpInstance.get;
    }

    get post() {
        return this.httpInstance.post;
    }

    get put() {
        return this.httpInstance.put;
    }
    get delete() {
        return this.httpInstance.delete;
    }

    get request() {
        return this.httpInstance.request;
    }
    get head() {
        return this.httpInstance.head;
    }
    get options() {
        return this.httpInstance.options;
    }
    get patch() {
        return this.httpInstance.patch;
    }
}
