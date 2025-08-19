# .AuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginApiV1AuthTokenPost**](AuthenticationApi.md#loginApiV1AuthTokenPost) | **POST** /api/v1/auth/token | Login


# **loginApiV1AuthTokenPost**
> Token loginApiV1AuthTokenPost()

Authenticate a user and return an access token.

### Example


```typescript
import { createConfiguration, AuthenticationApi } from '';
import type { AuthenticationApiLoginApiV1AuthTokenPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthenticationApi(configuration);

const request: AuthenticationApiLoginApiV1AuthTokenPostRequest = {
  
  username: "username_example",
  
  password: "password_example",
  
  grantType: "password",
  
  scope: "",
  
  clientId: "clientId_example",
  
  clientSecret: "clientSecret_example",
};

const data = await apiInstance.loginApiV1AuthTokenPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**string**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **grantType** | [**string**] |  | (optional) defaults to undefined
 **scope** | [**string**] |  | (optional) defaults to ''
 **clientId** | [**string**] |  | (optional) defaults to undefined
 **clientSecret** | [**string**] |  | (optional) defaults to undefined


### Return type

**Token**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


