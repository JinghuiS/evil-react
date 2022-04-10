import { Inject } from '@wendellhu/redi';
import { createStateService } from '../services';
import { HttpClient } from './client';

const paramKey = `__api_params`;
function setParam(target: any, key: string = paramKey): any {
    let params = target[key];
    if (typeof params === 'undefined') {
        params = target[key] = {};
    }
    return params;
}

export abstract class BaseApi<T = any> extends createStateService {
    path = '';
    basePath = '';

    constructor(@Inject(HttpClient) public _http: HttpClient) {
        super();
        const baseData = setParam(this);
        this.path = baseData.baseUrl;
    }
}

/**
 * 默认基准URL
 * - 有效范围：类
 */
export function BaseUrl(url: string) {
    return function <TClass extends new (...args: any[]) => BaseApi<any>>(target: TClass): TClass {
        const params = setParam(target.prototype);
        params.baseUrl = url;

        return target;
    };
}
