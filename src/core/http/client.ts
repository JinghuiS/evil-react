import {
    HttpClient as NgHttpClient,
    HttpConfig,
    HttpContext,
    HttpHeaders,
    HttpInterceptor,
    HttpParams,
    HttpRequest,
    HttpResponse,
    setupConfig,
} from '@ngify/http';
import { Inject, Many, Optional } from '@wendellhu/redi';
import { Observable } from 'rxjs';
import { HTTP_CLIENT_CONFIG } from './config';
import { HTTP_INTERCEPTOR } from './interceptor';
type SafeAny = any;
type Body = HttpRequest<SafeAny>['body'];
type Params = ConstructorParameters<typeof HttpParams>[0] | HttpParams | null;
type Headers = ConstructorParameters<typeof HttpHeaders>[0] | HttpHeaders;
type ResponseType = HttpRequest<SafeAny>['responseType'];

interface RequestOptions<T extends ResponseType = ResponseType> {
    body?: Body;
    params?: Params;
    headers?: Headers;
    context?: HttpContext;
    responseType?: T;
    reportProgress?: boolean;
    withCredentials?: boolean;
}

type RequestHttpOptions = Omit<RequestOptions<'json'>, 'params'> & { observe?: 'response' };

export class HttpClient {
    private httpInstance: NgHttpClient;

    constructor(
        @Many() @HTTP_INTERCEPTOR private readonly interceptors: HttpInterceptor[] | HttpInterceptor,
        @Optional(HTTP_CLIENT_CONFIG) private readonly config: HttpConfig,
    ) {
        console.log(this.interceptors, this.config);

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
    get<R = any>(url: string, params?: Params, options?: RequestHttpOptions): Observable<HttpResponse<R>> {
        return this.httpInstance.get<R>(url, params, options);
    }
    post<R = any>(url: string, body?: Body, options?: RequestHttpOptions): Observable<HttpResponse<R>> {
        return this.httpInstance.post<R>(url, body, options);
    }
    put<R = any>(url: string, body?: Body, options?: RequestHttpOptions): Observable<HttpResponse<R>> {
        return this.httpInstance.put<R>(url, body, options);
    }
    patch<R = any>(url: string, body?: Body, options?: RequestHttpOptions): Observable<HttpResponse<R>> {
        return this.httpInstance.patch<R>(url, body, options);
    }
    delete<R = any>(url: string, params?: Params, options?: RequestHttpOptions): Observable<HttpResponse<R>> {
        return this.httpInstance.delete<R>(url, params, options);
    }
    request<R = any>(request: HttpRequest<R>, options?: RequestHttpOptions): Observable<HttpResponse<R>> {
        return this.httpInstance.request<R>(request, options);
    }
}
