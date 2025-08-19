import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { HTTPValidationError } from '../models/HTTPValidationError';
import { Token } from '../models/Token';
import { User } from '../models/User';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiLoginApiV1AuthTokenPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationApiloginApiV1AuthTokenPost
     */
    username: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationApiloginApiV1AuthTokenPost
     */
    password: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationApiloginApiV1AuthTokenPost
     */
    grantType?: string
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof AuthenticationApiloginApiV1AuthTokenPost
     */
    scope?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationApiloginApiV1AuthTokenPost
     */
    clientId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationApiloginApiV1AuthTokenPost
     */
    clientSecret?: string
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Authenticate a user and return an access token.
     * Login
     * @param param the request object
     */
    public loginApiV1AuthTokenPostWithHttpInfo(param: AuthenticationApiLoginApiV1AuthTokenPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<Token>> {
        return this.api.loginApiV1AuthTokenPostWithHttpInfo(param.username, param.password, param.grantType, param.scope, param.clientId, param.clientSecret,  options).toPromise();
    }

    /**
     * Authenticate a user and return an access token.
     * Login
     * @param param the request object
     */
    public loginApiV1AuthTokenPost(param: AuthenticationApiLoginApiV1AuthTokenPostRequest, options?: ConfigurationOptions): Promise<Token> {
        return this.api.loginApiV1AuthTokenPost(param.username, param.password, param.grantType, param.scope, param.clientId, param.clientSecret,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiPingApiV1GetRequest {
}

export interface DefaultApiPingMongodbApiV1MongodbGetRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve users.
     * Ping
     * @param param the request object
     */
    public pingApiV1GetWithHttpInfo(param: DefaultApiPingApiV1GetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.pingApiV1GetWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve users.
     * Ping
     * @param param the request object
     */
    public pingApiV1Get(param: DefaultApiPingApiV1GetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.pingApiV1Get( options).toPromise();
    }

    /**
     * Retrieve users.
     * Ping Mongodb
     * @param param the request object
     */
    public pingMongodbApiV1MongodbGetWithHttpInfo(param: DefaultApiPingMongodbApiV1MongodbGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.pingMongodbApiV1MongodbGetWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve users.
     * Ping Mongodb
     * @param param the request object
     */
    public pingMongodbApiV1MongodbGet(param: DefaultApiPingMongodbApiV1MongodbGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.pingMongodbApiV1MongodbGet( options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiGetCurrentUserApiV1UsersMeGetRequest {
}

export interface UsersApiRegisterUserApiV1UsersRegisterPostRequest {
    /**
     * 
     * @type User
     * @memberof UsersApiregisterUserApiV1UsersRegisterPost
     */
    user: User
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the current authenticated user.
     * Get Current User
     * @param param the request object
     */
    public getCurrentUserApiV1UsersMeGetWithHttpInfo(param: UsersApiGetCurrentUserApiV1UsersMeGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<User>> {
        return this.api.getCurrentUserApiV1UsersMeGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get the current authenticated user.
     * Get Current User
     * @param param the request object
     */
    public getCurrentUserApiV1UsersMeGet(param: UsersApiGetCurrentUserApiV1UsersMeGetRequest = {}, options?: ConfigurationOptions): Promise<User> {
        return this.api.getCurrentUserApiV1UsersMeGet( options).toPromise();
    }

    /**
     * Register a new user.
     * Register User
     * @param param the request object
     */
    public registerUserApiV1UsersRegisterPostWithHttpInfo(param: UsersApiRegisterUserApiV1UsersRegisterPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.registerUserApiV1UsersRegisterPostWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * Register a new user.
     * Register User
     * @param param the request object
     */
    public registerUserApiV1UsersRegisterPost(param: UsersApiRegisterUserApiV1UsersRegisterPostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.registerUserApiV1UsersRegisterPost(param.user,  options).toPromise();
    }

}
