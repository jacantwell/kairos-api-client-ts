# JourneysApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addMarkerToJourneyApiV1JourneysJourneyIdMarkersPost**](#addmarkertojourneyapiv1journeysjourneyidmarkerspost) | **POST** /api/v1/journeys/{journey_id}/markers | Add Marker To Journey|
|[**createJourneyApiV1JourneysPost**](#createjourneyapiv1journeyspost) | **POST** /api/v1/journeys/ | Create Journey|
|[**deleteJourneyApiV1JourneysJourneyIdDelete**](#deletejourneyapiv1journeysjourneyiddelete) | **DELETE** /api/v1/journeys/{journey_id} | Delete Journey|
|[**getJourneyApiV1JourneysJourneyIdGet**](#getjourneyapiv1journeysjourneyidget) | **GET** /api/v1/journeys/{journey_id} | Get Journey|
|[**getJourneyMarkersApiV1JourneysJourneyIdMarkersGet**](#getjourneymarkersapiv1journeysjourneyidmarkersget) | **GET** /api/v1/journeys/{journey_id}/markers | Get Journey Markers|
|[**getNearbyJourneysApiV1JourneysJourneyIdJourneysNearbyGet**](#getnearbyjourneysapiv1journeysjourneyidjourneysnearbyget) | **GET** /api/v1/journeys/{journey_id}/journeys/nearby | Get Nearby Journeys|
|[**toggleActiveJourneyApiV1JourneysJourneyIdActivePatch**](#toggleactivejourneyapiv1journeysjourneyidactivepatch) | **PATCH** /api/v1/journeys/{journey_id}/active | Toggle Active Journey|

# **addMarkerToJourneyApiV1JourneysJourneyIdMarkersPost**
> Marker addMarkerToJourneyApiV1JourneysJourneyIdMarkersPost(marker)

Add a marker to a journey.

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

# **createJourneyApiV1JourneysPost**
> Journey createJourneyApiV1JourneysPost(journey)

Register a new journey.

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
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteJourneyApiV1JourneysJourneyIdDelete**
> any deleteJourneyApiV1JourneysJourneyIdDelete()


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

**any**

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

# **getJourneyApiV1JourneysJourneyIdGet**
> Journey getJourneyApiV1JourneysJourneyIdGet()

Get a journey by ID.

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

Get all markers for a journey.

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
> any getNearbyJourneysApiV1JourneysJourneyIdJourneysNearbyGet()

Get all journeys with markers near the markers of a given journey.

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

**any**

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

# **toggleActiveJourneyApiV1JourneysJourneyIdActivePatch**
> any toggleActiveJourneyApiV1JourneysJourneyIdActivePatch()


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

**any**

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

