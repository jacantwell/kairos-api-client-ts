# JourneysApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addMarkerToJourneyApiV1JourneysJourneyIdMarkersPost**](#addmarkertojourneyapiv1journeysjourneyidmarkerspost) | **POST** /api/v1/journeys/{journey_id}/markers | Add Marker To Journey|
|[**createJourneyApiV1JourneysPost**](#createjourneyapiv1journeyspost) | **POST** /api/v1/journeys/ | Create Journey|
|[**deleteJourneyApiV1JourneysJourneyIdDelete**](#deletejourneyapiv1journeysjourneyiddelete) | **DELETE** /api/v1/journeys/{journey_id} | Delete Journey|
|[**deleteJourneyMarkerApiV1JourneysJourneyIdMarkersMarkerIdDelete**](#deletejourneymarkerapiv1journeysjourneyidmarkersmarkeriddelete) | **DELETE** /api/v1/journeys/{journey_id}/markers/{marker_id} | Delete Journey Marker|
|[**getJourneyApiV1JourneysJourneyIdGet**](#getjourneyapiv1journeysjourneyidget) | **GET** /api/v1/journeys/{journey_id} | Get Journey|
|[**getJourneyMarkersApiV1JourneysJourneyIdMarkersGet**](#getjourneymarkersapiv1journeysjourneyidmarkersget) | **GET** /api/v1/journeys/{journey_id}/markers | Get Journey Markers|
|[**getNearbyJourneysApiV1JourneysJourneyIdJourneysNearbyGet**](#getnearbyjourneysapiv1journeysjourneyidjourneysnearbyget) | **GET** /api/v1/journeys/{journey_id}/journeys/nearby | Get Nearby Journeys|
|[**setCompletedJourneyApiV1JourneysJourneyIdPatch**](#setcompletedjourneyapiv1journeysjourneyidpatch) | **PATCH** /api/v1/journeys/{journey_id} | Set Completed Journey|
|[**toggleActiveJourneyApiV1JourneysJourneyIdActivePatch**](#toggleactivejourneyapiv1journeysjourneyidactivepatch) | **PATCH** /api/v1/journeys/{journey_id}/active | Toggle Active Journey|
|[**updateJourneyMarkerApiV1JourneysJourneyIdMarkersMarkerIdPut**](#updatejourneymarkerapiv1journeysjourneyidmarkersmarkeridput) | **PUT** /api/v1/journeys/{journey_id}/markers/{marker_id} | Update Journey Marker|

# **addMarkerToJourneyApiV1JourneysJourneyIdMarkersPost**
> Marker addMarkerToJourneyApiV1JourneysJourneyIdMarkersPost(marker)

Add a marker to a journey.  Creates a new marker associated with the specified journey and the authenticated user.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     journey_id: Unique identifier of the journey to add the marker to.     marker: Marker model containing the marker information.  Raises:     HTTPException: 404 if journey is not found.     HTTPException: 400 if marker creation fails.  Returns:     Marker: The newly created marker.

### Example

```typescript
import {
    JourneysApi,
    Configuration,
    Marker
} from './api';

const configuration = new Configuration();
const apiInstance = new JourneysApi(configuration);

let journeyId: string; // (default to undefined)
let marker: Marker; //

const { status, data } = await apiInstance.addMarkerToJourneyApiV1JourneysJourneyIdMarkersPost(
    journeyId,
    marker
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marker** | **Marker**|  | |
| **journeyId** | [**string**] |  | defaults to undefined|


### Return type

**Marker**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createJourneyApiV1JourneysPost**
> Journey createJourneyApiV1JourneysPost(journey)

Create a new journey.  Creates a new journey for the authenticated user.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     journey: Journey model containing the journey information.  Raises:     HTTPException: 400 if journey creation fails.  Returns:     Journey: The newly created journey.

### Example

```typescript
import {
    JourneysApi,
    Configuration,
    Journey
} from './api';

const configuration = new Configuration();
const apiInstance = new JourneysApi(configuration);

let journey: Journey; //

const { status, data } = await apiInstance.createJourneyApiV1JourneysPost(
    journey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journey** | **Journey**|  | |


### Return type

**Journey**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteJourneyApiV1JourneysJourneyIdDelete**
> deleteJourneyApiV1JourneysJourneyIdDelete()

Delete a journey.  Permanently removes a journey from the database.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     journey_id: Unique identifier of the journey to delete.  Raises:     HTTPException: 404 if journey is not found.     HTTPException: 500 if deletion fails.  Returns:     None

### Example

```typescript
import {
    JourneysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JourneysApi(configuration);

let journeyId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteJourneyApiV1JourneysJourneyIdDelete(
    journeyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journeyId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteJourneyMarkerApiV1JourneysJourneyIdMarkersMarkerIdDelete**
> deleteJourneyMarkerApiV1JourneysJourneyIdMarkersMarkerIdDelete()

Delete a marker from a journey.  Permanently removes a marker from the specified journey.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     journey_id: Unique identifier of the journey containing the marker.     marker_id: Unique identifier of the marker to delete.  Raises:     HTTPException: 404 if journey is not found.     HTTPException: 400 if deletion fails.  Returns:     None

### Example

```typescript
import {
    JourneysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JourneysApi(configuration);

let journeyId: string; // (default to undefined)
let markerId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteJourneyMarkerApiV1JourneysJourneyIdMarkersMarkerIdDelete(
    journeyId,
    markerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journeyId** | [**string**] |  | defaults to undefined|
| **markerId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getJourneyApiV1JourneysJourneyIdGet**
> Journey getJourneyApiV1JourneysJourneyIdGet()

Get a journey by ID.  Retrieves a specific journey by its unique identifier.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     journey_id: Unique identifier of the journey to retrieve.  Raises:     HTTPException: 404 if journey is not found.  Returns:     Journey: The requested journey.

### Example

```typescript
import {
    JourneysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JourneysApi(configuration);

let journeyId: string; // (default to undefined)

const { status, data } = await apiInstance.getJourneyApiV1JourneysJourneyIdGet(
    journeyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journeyId** | [**string**] |  | defaults to undefined|


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

# **getJourneyMarkersApiV1JourneysJourneyIdMarkersGet**
> Array<Marker> getJourneyMarkersApiV1JourneysJourneyIdMarkersGet()

Get all markers for a journey.  Retrieves all markers associated with the specified journey.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     journey_id: Unique identifier of the journey whose markers to retrieve.  Raises:     HTTPException: 404 if journey is not found.     HTTPException: 400 if retrieval fails.  Returns:     List[Marker]: List of all markers belonging to the journey.

### Example

```typescript
import {
    JourneysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JourneysApi(configuration);

let journeyId: string; // (default to undefined)

const { status, data } = await apiInstance.getJourneyMarkersApiV1JourneysJourneyIdMarkersGet(
    journeyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journeyId** | [**string**] |  | defaults to undefined|


### Return type

**Array<Marker>**

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

# **getNearbyJourneysApiV1JourneysJourneyIdJourneysNearbyGet**
> Array<Journey> getNearbyJourneysApiV1JourneysJourneyIdJourneysNearbyGet()

Get all journeys with markers near the markers of a given journey.  Retrieves journeys that have markers geographically close to the markers of the specified journey.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     journey_id: Unique identifier of the journey to find nearby journeys for.  Raises:     HTTPException: 404 if journey is not found.     HTTPException: 400 if retrieval fails.  Returns:     List[Journey]: List of journeys with nearby markers.

### Example

```typescript
import {
    JourneysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JourneysApi(configuration);

let journeyId: string; // (default to undefined)

const { status, data } = await apiInstance.getNearbyJourneysApiV1JourneysJourneyIdJourneysNearbyGet(
    journeyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journeyId** | [**string**] |  | defaults to undefined|


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

# **setCompletedJourneyApiV1JourneysJourneyIdPatch**
> setCompletedJourneyApiV1JourneysJourneyIdPatch()

Set a journey as completed.  Marks a journey as completed and automatically deactivates it. A completed journey cannot be active.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     journey_id: Unique identifier of the journey to mark as completed.  Raises:     HTTPException: 404 if journey is not found.     HTTPException: 500 if update fails.  Returns:     None

### Example

```typescript
import {
    JourneysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JourneysApi(configuration);

let journeyId: string; // (default to undefined)

const { status, data } = await apiInstance.setCompletedJourneyApiV1JourneysJourneyIdPatch(
    journeyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journeyId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggleActiveJourneyApiV1JourneysJourneyIdActivePatch**
> toggleActiveJourneyApiV1JourneysJourneyIdActivePatch()

Toggle a journey\'s active status.  Sets the specified journey as active and deactivates any other active journey for the user. If the specified journey is already active, it will be deactivated. Only one journey can be active per user at a time.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     journey_id: Unique identifier of the journey to toggle.  Raises:     HTTPException: 400 if update fails.  Returns:     None

### Example

```typescript
import {
    JourneysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JourneysApi(configuration);

let journeyId: string; // (default to undefined)

const { status, data } = await apiInstance.toggleActiveJourneyApiV1JourneysJourneyIdActivePatch(
    journeyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journeyId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateJourneyMarkerApiV1JourneysJourneyIdMarkersMarkerIdPut**
> Marker updateJourneyMarkerApiV1JourneysJourneyIdMarkersMarkerIdPut(marker)

Update a marker in a journey.  Updates an existing marker with new information while preserving its ID and ownership.  Args:     db: Database dependency for accessing data stores.     user: Current authenticated user from dependency injection.     journey_id: Unique identifier of the journey containing the marker.     marker_id: Unique identifier of the marker to update.     marker: Marker model containing the updated information.  Raises:     HTTPException: 404 if journey or marker is not found.     HTTPException: 400 if update fails.  Returns:     Marker: The updated marker.

### Example

```typescript
import {
    JourneysApi,
    Configuration,
    Marker
} from './api';

const configuration = new Configuration();
const apiInstance = new JourneysApi(configuration);

let journeyId: string; // (default to undefined)
let markerId: string; // (default to undefined)
let marker: Marker; //

const { status, data } = await apiInstance.updateJourneyMarkerApiV1JourneysJourneyIdMarkersMarkerIdPut(
    journeyId,
    markerId,
    marker
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marker** | **Marker**|  | |
| **journeyId** | [**string**] |  | defaults to undefined|
| **markerId** | [**string**] |  | defaults to undefined|


### Return type

**Marker**

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

