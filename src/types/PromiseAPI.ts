import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { HTTPValidationError } from '../models/HTTPValidationError';
import { Token } from '../models/Token';
import { User } from '../models/User';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { ObservableAuthenticationApi } from './ObservableAPI';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Authenticate a user and return an access token.
     * Login
     * @param username
     * @param password
     * @param [grantType]
     * @param [scope]
     * @param [clientId]
     * @param [clientSecret]
     */
    public loginApiV1AuthTokenPostWithHttpInfo(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Token>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginApiV1AuthTokenPostWithHttpInfo(username, password, grantType, scope, clientId, clientSecret, observableOptions);
        return result.toPromise();
    }

    /**
     * Authenticate a user and return an access token.
     * Login
     * @param username
     * @param password
     * @param [grantType]
     * @param [scope]
     * @param [clientId]
     * @param [clientSecret]
     */
    public loginApiV1AuthTokenPost(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, _options?: PromiseConfigurationOptions): Promise<Token> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginApiV1AuthTokenPost(username, password, grantType, scope, clientId, clientSecret, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve users.
     * Ping
     */
    public pingApiV1GetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.pingApiV1GetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve users.
     * Ping
     */
    public pingApiV1Get(_options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.pingApiV1Get(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve users.
     * Ping Mongodb
     */
    public pingMongodbApiV1MongodbGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.pingMongodbApiV1MongodbGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve users.
     * Ping Mongodb
     */
    public pingMongodbApiV1MongodbGet(_options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.pingMongodbApiV1MongodbGet(observableOptions);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the current authenticated user.
     * Get Current User
     */
    public getCurrentUserApiV1UsersMeGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<User>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCurrentUserApiV1UsersMeGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get the current authenticated user.
     * Get Current User
     */
    public getCurrentUserApiV1UsersMeGet(_options?: PromiseConfigurationOptions): Promise<User> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCurrentUserApiV1UsersMeGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Register a new user.
     * Register User
     * @param user
     */
    public registerUserApiV1UsersRegisterPostWithHttpInfo(user: User, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.registerUserApiV1UsersRegisterPostWithHttpInfo(user, observableOptions);
        return result.toPromise();
    }

    /**
     * Register a new user.
     * Register User
     * @param user
     */
    public registerUserApiV1UsersRegisterPost(user: User, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.registerUserApiV1UsersRegisterPost(user, observableOptions);
        return result.toPromise();
    }


}



