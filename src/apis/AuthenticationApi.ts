// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { HTTPValidationError } from '../models/HTTPValidationError';
import { Token } from '../models/Token';

/**
 * no description
 */
export class AuthenticationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Authenticate a user and return an access token.
     * Login
     * @param username 
     * @param password 
     * @param grantType 
     * @param scope 
     * @param clientId 
     * @param clientSecret 
     */
    public async loginApiV1AuthTokenPost(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError("AuthenticationApi", "loginApiV1AuthTokenPost", "username");
        }


        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new RequiredError("AuthenticationApi", "loginApiV1AuthTokenPost", "password");
        }






        // Path Params
        const localVarPath = '/api/v1/auth/token';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'application/x-www-form-urlencoded',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (grantType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('grant_type', grantType as any);
        }
        if (username !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('username', username as any);
        }
        if (password !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('password', password as any);
        }
        if (scope !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('scope', scope as any);
        }
        if (clientId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_id', clientId as any);
        }
        if (clientSecret !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_secret', clientSecret as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/x-www-form-urlencoded"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AuthenticationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to loginApiV1AuthTokenPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async loginApiV1AuthTokenPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Token >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Token = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Token", ""
            ) as Token;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Token = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Token", ""
            ) as Token;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
