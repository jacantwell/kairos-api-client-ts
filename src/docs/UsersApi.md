# UsersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteUserApiV1UsersUserIdDelete**](#deleteuserapiv1usersuseriddelete) | **DELETE** /api/v1/users/{user_id} | Delete User|
|[**getActiveJourneyApiV1UsersUserIdJourneysActiveGet**](#getactivejourneyapiv1usersuseridjourneysactiveget) | **GET** /api/v1/users/{user_id}/journeys/active | Get Active Journey|
|[**getCurrentUserApiV1UsersMeGet**](#getcurrentuserapiv1usersmeget) | **GET** /api/v1/users/me | Get Current User|
|[**getUserByIdApiV1UsersUserIdGet**](#getuserbyidapiv1usersuseridget) | **GET** /api/v1/users/{user_id} | Get User By Id|
|[**getUserJourneysApiV1UsersUserIdJourneysGet**](#getuserjourneysapiv1usersuseridjourneysget) | **GET** /api/v1/users/{user_id}/journeys | Get User Journeys|
|[**registerUserApiV1UsersRegisterPost**](#registeruserapiv1usersregisterpost) | **POST** /api/v1/users/register | Register User|
|[**resetPasswordApiV1UsersResetPasswordPost**](#resetpasswordapiv1usersresetpasswordpost) | **POST** /api/v1/users/reset-password | Reset Password|
|[**updatePasswordApiV1UsersUpdatePasswordPost**](#updatepasswordapiv1usersupdatepasswordpost) | **POST** /api/v1/users/update-password | Update Password|
|[**updateUserApiV1UsersUserIdPut**](#updateuserapiv1usersuseridput) | **PUT** /api/v1/users/{user_id} | Update User|
|[**verifyEmailApiV1UsersVerifyEmailGet**](#verifyemailapiv1usersverifyemailget) | **GET** /api/v1/users/verify-email | Verify Email|

# **deleteUserApiV1UsersUserIdDelete**
> MessageResponse deleteUserApiV1UsersUserIdDelete()

Delete a user and all associated data.  Permanently deletes a user account along with all their journeys and markers. This operation cannot be undone.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     user_id: Unique identifier of the user to delete.  Raises:     HTTPException: 404 if user is not found.  Returns:     MessageResponse: Confirmation message of successful deletion.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteUserApiV1UsersUserIdDelete(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**MessageResponse**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActiveJourneyApiV1UsersUserIdJourneysActiveGet**
> Journey getActiveJourneyApiV1UsersUserIdJourneysActiveGet()

Get the active journey for a specific user.  Retrieves the currently active journey for the specified user.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     user_id: Unique identifier of the user whose active journey to retrieve.  Raises:     HTTPException: 400 if user_id is invalid.     HTTPException: 404 if no active journey is found.     HTTPException: 500 if database query fails.  Returns:     Journey: The user\'s currently active journey.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getActiveJourneyApiV1UsersUserIdJourneysActiveGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**Journey**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCurrentUserApiV1UsersMeGet**
> User getCurrentUserApiV1UsersMeGet()

Get the current authenticated user.  Retrieves the user profile for the currently authenticated user.  Args:     user: Current authenticated user from dependency injection.  Returns:     User: The current user\'s profile information.

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

# **getUserByIdApiV1UsersUserIdGet**
> User getUserByIdApiV1UsersUserIdGet()

Get a user by their ID.  Retrieves user profile information by user ID.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     user_id: Unique identifier of the user to retrieve.  Raises:     HTTPException: 404 if user is not found.  Returns:     User: The requested user\'s profile information.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserByIdApiV1UsersUserIdGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserJourneysApiV1UsersUserIdJourneysGet**
> Array<Journey> getUserJourneysApiV1UsersUserIdJourneysGet()

Get all journeys for a specific user.  Retrieves all journeys associated with the specified user ID.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     user_id: Unique identifier of the user whose journeys to retrieve.  Raises:     HTTPException: 400 if user_id is invalid.     HTTPException: 500 if database query fails.  Returns:     List[Journey]: List of all journeys belonging to the user.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserJourneysApiV1UsersUserIdJourneysGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**Array<Journey>**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerUserApiV1UsersRegisterPost**
> any registerUserApiV1UsersRegisterPost(user)

Register a new user and send verification email.  Creates a new user account with hashed password, generates a verification token, and sends a verification email to the provided email address.  Args:     db: Database dependency for accessing data stores.     user: User model containing registration information.  Raises:     HTTPException: 400 if email is already registered.  Returns:     None

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
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetPasswordApiV1UsersResetPasswordPost**
> any resetPasswordApiV1UsersResetPasswordPost()

Request password reset and send reset link via email.  Generates a password reset token and sends a reset link to the user\'s email. Silently succeeds even if email is not found to prevent user enumeration.  Args:     db: Database dependency for accessing data stores.     email: Email address of the user requesting password reset.  Raises:     HTTPException: 500 if multiple users found with the same email (data integrity error).  Returns:     None

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let email: string; // (default to undefined)

const { status, data } = await apiInstance.resetPasswordApiV1UsersResetPasswordPost(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePasswordApiV1UsersUpdatePasswordPost**
> MessageResponse updatePasswordApiV1UsersUpdatePasswordPost()

Update user password using reset token.  Validates the password reset token and updates the user\'s password.  Args:     db: Database dependency for accessing data stores.     token: Password reset token.     new_password: New password to set for the user.  Raises:     HTTPException: 400 if token is invalid or expired.     HTTPException: 404 if user is not found or multiple users found.  Returns:     MessageResponse: Confirmation message of password update.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; // (default to undefined)
let newPassword: string; // (default to undefined)

const { status, data } = await apiInstance.updatePasswordApiV1UsersUpdatePasswordPost(
    token,
    newPassword
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|
| **newPassword** | [**string**] |  | defaults to undefined|


### Return type

**MessageResponse**

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

# **updateUserApiV1UsersUserIdPut**
> User updateUserApiV1UsersUserIdPut(user)

Update a user\'s profile information.  Updates the user profile with the provided information. Password changes are not allowed through this endpoint.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     user_id: Unique identifier of the user to update.     updated_user: User model containing the updated information.  Raises:     HTTPException: 404 if user is not found.     HTTPException: 400 if password change is attempted.  Returns:     User: The updated user profile.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)
let user: User; //

const { status, data } = await apiInstance.updateUserApiV1UsersUserIdPut(
    userId,
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User**|  | |
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**User**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyEmailApiV1UsersVerifyEmailGet**
> MessageResponse verifyEmailApiV1UsersVerifyEmailGet()

Verify user email address using verification token.  Validates the verification token and marks the user\'s email as verified.  Args:     db: Database dependency for accessing data stores.     token: Email verification token.  Raises:     HTTPException: 400 if token is invalid or expired.     HTTPException: 404 if user is not found.     HTTPException: 500 if multiple users found (data integrity error).  Returns:     MessageResponse: Confirmation message of verification status.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.verifyEmailApiV1UsersVerifyEmailGet(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**MessageResponse**

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

