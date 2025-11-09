# AuthenticationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**loginApiV1AuthTokenPost**](#loginapiv1authtokenpost) | **POST** /api/v1/auth/token | Login|
|[**refreshApiV1AuthRefreshPost**](#refreshapiv1authrefreshpost) | **POST** /api/v1/auth/refresh | Refresh|

# **loginApiV1AuthTokenPost**
> Tokens loginApiV1AuthTokenPost()

Authenticate a user and return access and refresh tokens.  Validates user credentials and generates JWT access and refresh tokens for authenticated sessions.  Args:     db: Database dependency for accessing data stores.     data: OAuth2 password request form containing username (email) and password.  Raises:     HTTPException: 400 if username or password is incorrect.  Returns:     Tokens: Object containing access_token and refresh_token.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let username: string; // (default to undefined)
let password: string; // (default to undefined)
let grantType: string; // (optional) (default to undefined)
let scope: string; // (optional) (default to '')
let clientId: string; // (optional) (default to undefined)
let clientSecret: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.loginApiV1AuthTokenPost(
    username,
    password,
    grantType,
    scope,
    clientId,
    clientSecret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] |  | defaults to undefined|
| **password** | [**string**] |  | defaults to undefined|
| **grantType** | [**string**] |  | (optional) defaults to undefined|
| **scope** | [**string**] |  | (optional) defaults to ''|
| **clientId** | [**string**] |  | (optional) defaults to undefined|
| **clientSecret** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Tokens**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refreshApiV1AuthRefreshPost**
> Tokens refreshApiV1AuthRefreshPost()

Refresh an access token using a refresh token.  Validates a refresh token and generates a new access token. The same refresh token is returned for continued use.  Args:     refresh_token: Valid JWT refresh token.  Raises:     HTTPException: 401 if refresh token has expired.     HTTPException: 403 if refresh token is invalid.  Returns:     Tokens: Object containing new access_token and the same refresh_token.  Note:     TODO: Add logic for refresh token rotation for improved security.     This requires maintaining a record of blacklisted refresh tokens.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let refreshToken: string; // (default to undefined)

const { status, data } = await apiInstance.refreshApiV1AuthRefreshPost(
    refreshToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshToken** | [**string**] |  | defaults to undefined|


### Return type

**Tokens**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

