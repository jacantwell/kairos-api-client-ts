import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { Token } from '../models/Token';
import { User } from '../models/User';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class ObservableAuthenticationApi {
    private requestFactory: AuthenticationApiRequestFactory;
    private responseProcessor: AuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationApiResponseProcessor();
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
    public loginApiV1AuthTokenPostWithHttpInfo(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Token>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.loginApiV1AuthTokenPost(username, password, grantType, scope, clientId, clientSecret, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginApiV1AuthTokenPostWithHttpInfo(rsp)));
            }));
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
    public loginApiV1AuthTokenPost(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, _options?: ConfigurationOptions): Observable<Token> {
        return this.loginApiV1AuthTokenPostWithHttpInfo(username, password, grantType, scope, clientId, clientSecret, _options).pipe(map((apiResponse: HttpInfo<Token>) => apiResponse.data));
    }

}

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Retrieve users.
     * Ping
     */
    public pingApiV1GetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.pingApiV1Get(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pingApiV1GetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve users.
     * Ping
     */
    public pingApiV1Get(_options?: ConfigurationOptions): Observable<any> {
        return this.pingApiV1GetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve users.
     * Ping Mongodb
     */
    public pingMongodbApiV1MongodbGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.pingMongodbApiV1MongodbGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pingMongodbApiV1MongodbGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve users.
     * Ping Mongodb
     */
    public pingMongodbApiV1MongodbGet(_options?: ConfigurationOptions): Observable<any> {
        return this.pingMongodbApiV1MongodbGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Get the current authenticated user.
     * Get Current User
     */
    public getCurrentUserApiV1UsersMeGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<User>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCurrentUserApiV1UsersMeGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCurrentUserApiV1UsersMeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the current authenticated user.
     * Get Current User
     */
    public getCurrentUserApiV1UsersMeGet(_options?: ConfigurationOptions): Observable<User> {
        return this.getCurrentUserApiV1UsersMeGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Register a new user.
     * Register User
     * @param user
     */
    public registerUserApiV1UsersRegisterPostWithHttpInfo(user: User, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.registerUserApiV1UsersRegisterPost(user, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerUserApiV1UsersRegisterPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Register a new user.
     * Register User
     * @param user
     */
    public registerUserApiV1UsersRegisterPost(user: User, _options?: ConfigurationOptions): Observable<any> {
        return this.registerUserApiV1UsersRegisterPostWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
