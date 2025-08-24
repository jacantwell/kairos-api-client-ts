# UsersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCurrentUserApiV1UsersMeGet**](#getcurrentuserapiv1usersmeget) | **GET** /api/v1/users/me | Get Current User|
|[**registerUserApiV1UsersRegisterPost**](#registeruserapiv1usersregisterpost) | **POST** /api/v1/users/register | Register User|

# **getCurrentUserApiV1UsersMeGet**
> User getCurrentUserApiV1UsersMeGet()

Get the current authenticated user.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.getCurrentUserApiV1UsersMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**User**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerUserApiV1UsersRegisterPost**
> any registerUserApiV1UsersRegisterPost(user)

Register a new user.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let user: User; //

const { status, data } = await apiInstance.registerUserApiV1UsersRegisterPost(
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User**|  | |


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
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

