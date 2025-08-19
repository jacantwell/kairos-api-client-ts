# .UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentUserApiV1UsersMeGet**](UsersApi.md#getCurrentUserApiV1UsersMeGet) | **GET** /api/v1/users/me | Get Current User
[**registerUserApiV1UsersRegisterPost**](UsersApi.md#registerUserApiV1UsersRegisterPost) | **POST** /api/v1/users/register | Register User


# **getCurrentUserApiV1UsersMeGet**
> User getCurrentUserApiV1UsersMeGet()

Get the current authenticated user.

### Example


```typescript
import { createConfiguration, UsersApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request = {};

const data = await apiInstance.getCurrentUserApiV1UsersMeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**User**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **registerUserApiV1UsersRegisterPost**
> any registerUserApiV1UsersRegisterPost(user)

Register a new user.

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiRegisterUserApiV1UsersRegisterPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiRegisterUserApiV1UsersRegisterPostRequest = {
  
  user: {
    id: "id_example",
    username: "username_example",
    password: "password_example",
  },
};

const data = await apiInstance.registerUserApiV1UsersRegisterPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


